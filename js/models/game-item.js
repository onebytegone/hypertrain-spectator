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
         date: 0,
         board: []
      },

      parse: function(response) {
         // No refomatting currently needed
         return response;
      },

      // Overwrite the sync method to pass over the Same Origin Policy
      sync: function(method, model, options) {
         var self = this;
         var params = _.extend({
            type: 'GET',
            dataType: 'jsonp',
            url: config.api + '/spectator/' + this.ident,
            processData: false
         }, options);

         return $.ajax(params);
      }
  });

   return GameItem;
});
