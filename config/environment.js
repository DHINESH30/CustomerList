'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'booksworld',
    environment,
    rootURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' https://customer-data-51a90-default-rtdb.firebaseio.com/"
    },
    firebase : {
      apiKey: "AIzaSyBGd7EBJAbvLZks2nEM6tz2wJz5dW3-7tw",
      authDomain: "customer-data-51a90.firebaseapp.com",
      databaseURL: "https://customer-data-51a90-default-rtdb.firebaseio.com",
      projectId: "customer-data-51a90",
      storageBucket: "customer-data-51a90.appspot.com",
      messagingSenderId: "982766476393"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
