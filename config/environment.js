'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'librarymanagement',
    environment,
    contentSecurityPolicy:{'connect-src':"'self' wss://*.firebaseio.com"},
    //firebase:'https://console.firebase.google.com/project/librarymanagement-c3f8e/database/firestore/data~2Flogdetails~2Fz78t9LN1UhcRu2NvlQ0q',
    firebase: {
    apiKey: "AIzaSyAvm7DUZU2pMEm-_Mcyw2o5A22zM0PNvOM",
    authDomain: "librarymanagement-c3f8e.firebaseapp.com",
    databaseURL: "https://librarymanagement-c3f8e.firebaseio.com/",
    projectId: "librarymanagement-c3f8e",
    storageBucket: "librarymanagement-c3f8e.appspot.com",
    messagingSenderId: "288419936306"
  },
    rootURL: '/',
    locationType: 'auto',
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
