// Filename: views/bound-view

define([
   'jquery',
   'underscore',
   'backbone',
   'rivets',
   'views/bound-view',
   'adapters',
   'formatters'
], function($, _, Backbone, rivets, BoundView){
   var BoundView = Backbone.View.extend({
      binding: null,  // used for rivets
      template: null,  // HTML for template

      render: function(){
         this.$el.html( this.template );
         this.binding = rivets.bind(this.$el, { view: this, model: this.model });
      },

      remove: function() {
         this.binding.unbind();
      }
   });

   return BoundView;
});
