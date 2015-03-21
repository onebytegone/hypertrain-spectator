// Filename: models/game-item

define([
   'jquery',
   'underscore',
   'backbone'
], function($, _, Backbone){
   var GameItem = Backbone.Model.extend({
      defaults: {
         ident: '',
         date: 0
      }
  });

   return GameItem;
});
