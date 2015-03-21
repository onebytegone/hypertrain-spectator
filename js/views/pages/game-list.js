// Filename: views/pages/game-list

define([
  'jquery',
  'underscore',
  'backbone',
  'rivets',
  'text!templates/pages/game-list.html',
  'collections/game-collection',
  'adapters'
], function($, _, Backbone, rivets, viewTemplate, GameCollection){
   var GameListView = Backbone.View.extend({
      el: $('#page'),
      binding: null, // used for rivets

      initialize: function() {
         _.bindAll(this, 'render');

         this.collection = new GameCollection();

         var self = this;
         this.collection.fetch({
            success: function () {
               self.render();
            }
         });
      },

      render: function(){
         this.$el.html( viewTemplate );
         this.binding = rivets.bind(this.$el, {view: this});
      },

      remove: function() {
         this.binding.unbind();
      }
   });

   return GameListView;
});
