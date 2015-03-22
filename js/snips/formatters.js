// Filename: snips/formatters.js
// This is the place for rivets formatters

define([
   'rivets'
], function(rivets){
   rivets.formatters.prepend = function(value, str) {
      return str + value;
   };
});
