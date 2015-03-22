// Filename: templates/templates.js

var imports = {
   'gamelist': 'text!../templates/pages/game-list.html',
   'gameinfo': 'text!../templates/pages/game-info.html',
   'GameListItem': 'text!../templates/elements/game-list-item.html',
};

var files = Object.keys(imports).map(function(key){
    return imports[key];
});

define(files, function () {
   "use strict";

   var keys = Object.keys(imports);
   var args = Array.prototype.slice.call(arguments);

   var pointers = args.reduce(function (carry, item, index) {
      carry[keys[index]] = item;
      return carry;
   }, []);

   return pointers;
});
