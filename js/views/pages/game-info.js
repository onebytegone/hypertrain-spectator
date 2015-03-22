// Filename: views/pages/game-info

define([
   'jquery',
   'underscore',
   'backbone',
   'marionette',
   'views/bound-view',
   'views/game-preview',
   'templates',
   'models/game-item'
], function($, _, Backbone, Marionette, BoundView, GamePreview, templates, GameItem){
   var GameInfoView = Marionette.ItemView.extend({
      el: $('#page'),
      template: _.template(templates.GameInfoPage),

      initialize: function(ident) {
         _.bindAll(this, 'render');

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
      }
   });

   return GameInfoView;
});
