// Filename: models/game-item

define([
   'jquery',
   'underscore',
   'backbone',
   'config'
], function($, _, Backbone){
   var GameItem = Backbone.Model.extend({
      defaults: {
         ident: '',
         date: 0
      },

      parse: function(response) {
         // No refomatting currently needed
         console.log('log');
         console.log(response);
         return response.payload.game;
      },

      // Overwrite the sync method to pass over the Same Origin Policy
      sync: function(method, model, options) {
         console.log('sync');
         var self = this;
            var params = _.extend({
               type: 'GET',
               dataType: 'jsonp',
               url: config.server + '/spectator/' + this.ident,
               processData: false
            }, options);

         return $.ajax(params);
      }
  });

   return GameItem;
});
