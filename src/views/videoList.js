var VideoListView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);   
  },
  

  render: function() {
    this.$el.children().detach();
  
    this.$el.html(this.template());

    this.collection.forEach(this.renderEntry, this);
    return this;
  },
  renderEntry: function(entry) {
    var view = new VideoListEntryView({'model': entry});
    this.$('.video-list').append(view.render().el);
  },

  template: templateURL('src/templates/videoList.html')

});
