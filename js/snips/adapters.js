// Filename: snips/adapters.js
// This is the place for rivets adapters

define([
   'rivets'
], function(rivets){

   rivets.adapters[':'] = {
      // set the listeners to update the corresponding DOM element
      observe: function(obj, keypath, callback) {
         if (obj instanceof Backbone.Collection) {
            obj.on('add remove reset', callback);
         }
         obj.on('change:' + keypath, callback);
      },
      // this will be triggered to unbind the Rivets.js events
      unobserve: function(obj, keypath, callback) {
         if (obj instanceof Backbone.Collection) {
            obj.off('add remove reset', callback);
         }
         obj.off('change:' + keypath, callback);
      },
      // define how Rivets.js should read the propery from our objects
      get: function(obj, keypath) {
         // if we use a collection we will loop through its models otherwise we just get the model properties
         return obj instanceof Backbone.Collection ? obj.models : obj.get(keypath);
      },
      // It gets triggered whenever we want update a model using Rivets.js
      set: function(obj, keypath, value) {
         obj.set(keypath, value);
      }
   };
});
