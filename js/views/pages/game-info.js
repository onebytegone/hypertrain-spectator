// Filename: views/pages/game-info

define([
   'jquery',
   'underscore',
   'backbone',
   'rivets',
   'views/bound-view',
   'views/game-preview',
   'templates',
   'models/game-item'
], function($, _, Backbone, rivets, BoundView, GamePreview, templates, GameItem){
   var GameInfoView = BoundView.extend({
      el: $('#page'),
      template: templates.gameinfo,
      preview: null,

      initialize: function(ident) {
         _.bindAll(this, 'render');
         this.preview = new GamePreview();

         this.model = new GameItem();
         this.model.ident = ident;

         var self = this;
         this.model.fetch({
            success: function () {
               console.log(self.model);
               self.render();
            }
         });
      },

      render: function() {
         BoundView.prototype.render.call(this);

         this.preview.board = this.model.get('board');
         this.preview.render();
      }
   });

   return GameInfoView;
});
