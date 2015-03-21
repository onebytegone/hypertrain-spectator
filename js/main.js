// Filename: main.js

require.config({
   paths: {
      config: '../config/config',
      templates: '../templates',
      adapters: 'snips/adapters',

      backbone: 'thirdparty/backbone',
      jquery: 'thirdparty/jquery-1.11.2.min',
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
      }
   }
});

require([
   'app',
], function(App){
   App.initialize();
});

