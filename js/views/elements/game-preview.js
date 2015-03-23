// Filename: views/pages/game-preview.js

define([
   'jquery',
   'underscore',
   'backbone',
   'marionette',
], function($, _, Backbone, Marionette){
   var GamePreview = Marionette.ItemView.extend({
      tagName: "div",
      template: _.template(''),
      board: null,
      stateConfig: {
         '_': 'free',
         '#': 'free'
      },

      onRender: function() {
         if (!this.board) {
            return;
         }

         // Reverse rows and cols for data
         var board = this.board;
         board = _.map(board[0], function(col, index) {
            return _.map(board, function(row) {
               return row[index];
            });
         });

         // Build elements
         var self = this;
         var elements = _.reduce(this.board, function(carry, row) {
            var row = _.reduce(row, function(total, item) {
               var cell = $('<div class="tile">');
               var classVal = 'player';

               if (item in self.stateConfig) {
                  classVal = self.stateConfig[item];
               }

               cell.addClass(classVal);

               total.append(cell);

               return total;
            }, $('<div class="row">'));

            carry.append(row);
            return carry;
         }, $('<div class="game-board">'));

         this.$el.append(elements);
      }
   });

   return GamePreview;
});
