// Filename: collections/game-collection.js

define([
   'jquery',
   'underscore',
   'backbone',
   'rivets',
   'models/game-item',
   'config'
], function($, _, Backbone, rivets, GameItem){
   var GameCollection = Backbone.Collection.extend({
      model: GameItem,

      // Url to request when fetch() is called
      url: config.api + '/spectator',

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
            url: self.url,
            processData: false
         }, options);

         return $.ajax(params);
      }
   });

   return GameCollection;
});
