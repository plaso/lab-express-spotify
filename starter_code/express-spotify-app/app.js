var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
var clientId = '2d60017e3e4d4a3db10e529d67cfec0c',
    clientSecret = 'f97ca9f695ac496ebeeb886332160b7b';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});
