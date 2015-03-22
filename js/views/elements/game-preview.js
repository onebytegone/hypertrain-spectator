// Filename: views/pages/game-info

define([
   'jquery',
   'underscore',
   'backbone',
   'rivets',
   'views/bound-view'
], function($, _, Backbone, rivets, BoundView){
   var GamePreview = Backbone.View.extend({
      el: $('#preview'),
      board: null,

      initialize: function() {
         _.bindAll(this, 'render');
      },

      render: function() {
         if (!this.board) {
            return;
         }

         var board = this.board;
         board = _.map(board[0], function(col, index) {
            return _.map(board, function(row) {
               return row[index];
            });
         });

         var elements = _.reduce(this.board, function(carry, row) {
            var row = _.reduce(row, function(total, item) {
               var cell = $('<div>');
               cell.html(item);
               total.append(cell);
               return total;
            }, $('<div>'));

            carry.append(row);
            return carry;
         }, $('<div>'));

         this.$el.append(elements);
      }
   });

   return GamePreview;
});
