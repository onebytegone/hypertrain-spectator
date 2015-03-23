// Filename: views/pages/game-list

define([
   'jquery',
   'underscore',
   'backbone',
   'marionette',
   'collections/game-collection',
   'templates'
], function($, _, Backbone, Marionette, GameCollection, templates){
   var SingleGameItem = Marionette.ItemView.extend({
      tagName: "li",
      template: _.template(templates.GameListItem)
   });

   var GameList = Marionette.CollectionView.extend({
      tagName: 'ul',
      childView: SingleGameItem
   });

   var GameListPage = Marionette.LayoutView.extend({
      el: $('#page'),
      template: _.template(templates.GameListPage),

      regions: {
         list: "#list",
      },

      initialize: function() {
         this.collection = new GameCollection();

         var self = this;
         this.collection.fetch({
            success: function () {
               self.render();
            }
         });
      },

      onRender: function() {
         this.getRegion('list').show(
            new GameList({
               collection: this.collection
            })
         );
      }
   });

   return GameListPage;
});
