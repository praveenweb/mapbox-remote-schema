# mapbox-remote-schema

[Mapbox](http://mapbox.com) is a live location platform that lets you build apps powered by location data and realtime updates.

## Adding Mapbox as Remote Schema

- Get the Mapbox Access Token by visting the following [https://docs.mapbox.com/help/how-mapbox-works/access-tokens/#mapbox-account-dashboard](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/#mapbox-account-dashboard).
- Set the API key as `MAPBOX_ACCESS_TOKEN` environment variable.
- This remote schema has two custom resolvers. One is used to accept a location argument of type "Point" of Postgres and returns places nearby. The other is used to accept a location argument of type "String" and returns a list of coordinates that can be plotted on the map.
- Refer to API documentation for integration with other information.

## Mapbox Geocoding API Documentation

[API Documentation](https://docs.mapbox.com/api/search/#geocoding).

## Deploy with Glitch

1. Click the following button to edit on glitch

   [![glitch-deploy-button](https://raw.githubusercontent.com/hasura/graphql-engine/master/community/boilerplates/auth-webhooks/nodejs-express/assets/deploy-glitch.png)](http://glitch.com/edit/#!/import/github/praveenweb/mapbox-remote-schema)

2. Add the following environment variables in the `.env` file on glitch.

   ```env
   MAPBOX_ACCESS_TOKEN=xxx
   PORT=3000
   ```

## Running Locally

```bash
npm install
PORT=3000 MAPBOX_ACCESS_TOKEN=xxx npm start
```
