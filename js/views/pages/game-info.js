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
      gameIdent: '',
      regions: {
         'game-board': "#mBoard",
      },

      initialize: function() {
         this.model = new GameItem();
         this.model.set({'ident': this.options.gameIdent});

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
