var VideoListView = Backbone.View.extend({

  el: '.list',
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);    
  },
  

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(function(model) {
      return new VideoListEntryView({'model': model}).render();
    });  
    return this;
  },


  template: templateURL('src/templates/videoList.html')

});


