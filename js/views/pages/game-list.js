// Filename: views/pages/game-list

define([
   'jquery',
   'underscore',
   'backbone',
   'views/bound-view',
   'text!templates/pages/game-list.html',
   'collections/game-collection',
   'adapters'
], function($, _, Backbone, BoundView, viewTemplate, GameCollection){
   var GameListView = BoundView.extend({
      el: $('#page'),
      template: viewTemplate,

      initialize: function() {
         _.bindAll(this, 'render');

         this.collection = new GameCollection();

         var self = this;
         this.collection.fetch({
            success: function () {
               self.render();
            }
         });
      }
   });

   return GameListView;
});
