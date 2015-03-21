require(['backbone', 'jquery', 'config'], function(Backbone, $){

   var ListView = Backbone.View.extend({
      el: $('body'), // attaches `this.el` to an existing element.
      listEntries: [],

      initialize: function(){
         _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

         var self = this;
         $.getJSON( config.server + '/spectator' + '/?callback=?', function( data ) {
            self.listEntries = data;
            self.render();
         });
      },

      render: function(){
         var list = $('<ul>');

         _.each(this.listEntries, function (item) {
            var ele = $('<li>');

            var link = $('<a href="#">');

            var name = $('<span>');
            name.html(item.ident);
            link.append(name);

            var date = $('<span>');
            date.html(item.date);
            link.append(date);

            console.log(item);

            ele.append(link);
            list.append(ele);
         });

         $(this.el).append( list );
      }
   });

   var listView = new ListView();
});
