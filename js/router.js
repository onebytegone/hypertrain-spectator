// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/pages/game-list'
], function($, _, Backbone, GameListPage){
   var AppRouter = Backbone.Router.extend({
      routes: {
         'allgames': 'showGameList',

         // Default
         '*actions': 'defaultAction'
      }
   });

   var initialize = function(){
      var app_router = new AppRouter;

      app_router.on('route:showGameList', function(){
         var view = new GameListPage();
         view.render();
      });

      app_router.on('route:defaultAction', function(actions){
         console.log('No route:', actions);
      });

      Backbone.history.start();
   };

   return {
      initialize: initialize
   };
});
