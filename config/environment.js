/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'spotifind',
    environment: environment,
    baseURL: '/',
    locationType: 'history',
    contentSecurityPolicy: {
        'script-src': "'self' 'unsafe-eval' http://*:35729",
          'font-src': "'self' http://fonts.gstatic.com", // Support Google Web fonts
          'connect-src': "'self' *",
          'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };



  return ENV;
};
