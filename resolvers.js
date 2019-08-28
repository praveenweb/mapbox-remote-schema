const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
const BASE_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'; 
const fetch = require('node-fetch');

const resolvers = {
    Query: {
        forward_geocode: (root, args, context, info) => {
            const search_text = args.location;

            const encoded_query = encodeURIComponent(search_text)
            const url = BASE_URL + encoded_query + '.json?access_token=' + MAPBOX_ACCESS_TOKEN;
            return fetch(url)
                .then(res => res.json())
                .then(body => {
                    const features = body.features;
                    const results = [];
                    features.forEach( (feature, index) => {
                        results.push({place_name: feature.place_name, long: feature.geometry.coordinates[0], lat: feature.geometry.coordinates[1]});
                    });
                    return results;
                });
        },

        reverse_geocode: (root, args, context, info) => {
            const coordinates = args.location.coordinates;
            const lat = coordinates[0];
            const long = coordinates[1];

            const url = BASE_URL + long + ',' + lat + '.json?type=poi&access_token=' + MAPBOX_ACCESS_TOKEN;
            return fetch(url)
                .then(res => res.json())
                .then(body => {
                    const features = body.features;
                    const results = [];
                    features.forEach( (feature, index) => {
                        results.push({id: feature.id, place_type: feature.place_type[0], place_name: feature.place_name, long: feature.geometry.coordinates[0], lat: feature.geometry.coordinates[1]
                        });
                    });
                    return results;
                });
        },
    },
};

module.exports = {
    resolvers,
};