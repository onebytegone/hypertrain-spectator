// Filename: views/pages/game-info

define([
   'jquery',
   'underscore',
   'backbone',
   'marionette',
   'templates',
   'models/game-item',
   'views/elements/game-preview'
], function($, _, Backbone, Marionette, templates, GameItem, GamePreview){

   var GameInfoView = Marionette.LayoutView.extend({
      el: $('#page'),
      template: _.template(templates.GameInfoPage),

      regions: {
         'game-board': "#mBoard",
      },

      initialize: function(ident) {
         this.model = new GameItem();
         this.model.ident = ident;

         var self = this;
         this.model.fetch({
            success: function () {
               self.render();
            }
         });
      },

      onRender: function() {
         var preview = new GamePreview();
         preview.board = this.model.get('board');
         this.getRegion('game-board').show(preview);
      }
   });

   return GameInfoView;
});
