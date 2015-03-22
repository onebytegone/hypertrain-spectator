// Filename: main.js

require.config({
   paths: {
      config: '../config/config',
      templates: '../templates/templates',
      adapters: 'snips/adapters',
      formatters: 'snips/formatters',

      backbone: 'thirdparty/backbone',
      'backbone.babysitter': 'thirdparty/backbone.babysitter.min',
      'backbone.wreqr': 'thirdparty/backbone.wreqr.min',
      jquery: 'thirdparty/jquery-1.11.2.min',
      marionette: 'thirdparty/backbone.marionette.min',
      rivets: 'thirdparty/rivets.min',
      sightglass: 'thirdparty/sightglass',
      text: 'thirdparty/text',  // Plug-in for requirejs. Used to help with templating
      underscore: 'thirdparty/underscore-min'
   },
   shim: {
      // The sightglass & rivets shims are needed because of:
      // https://github.com/mikeric/rivets/issues/427
      sightglass : {
         exports: 'sightglass'
      },
      rivets : {
         deps : ['sightglass'],
         exports : 'rivets'
      },
      marionette : {
         deps : ['backbone.babysitter', 'backbone.wreqr'],
         exports : 'marionette'
      }
   }
});

require([
   'app',
], function(App){
   App.initialize();
});

