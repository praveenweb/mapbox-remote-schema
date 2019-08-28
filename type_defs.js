const gql = require('graphql-tag');

const typeDefs = gql`
    type ForwardGeocoding {
        place_name: String
        lat: String
        long: String
    }

    type ReverseGeocoding {
        id: String
        place_type: String
        place_name: String
        lat: String
        long: String
    }

    type Query {
        forward_geocode(location: String!): [ForwardGeocoding]
        reverse_geocode(location: geography!): [ReverseGeocoding]
    }

    scalar geography
`;

module.exports = {
    typeDefs,
};