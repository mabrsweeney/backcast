var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    // this.listenTo(this.collection, 'select', this.render);
    this.collection.on('select', function(element) {
      this.model = element;
      this.render();
    }, this);
    this.listenTo(this.collection, 'sync', function(element) {
      this.model = undefined;
      // The model will be assigned in render but select() is not called
      // therefore the tests will not pass
     // this.model.trigger('select', this.collection.at(0));
    
      this.render();
    });   

  },
  render: function() {
    if (this.collection.length) {
      if (this.model === undefined) {
        this.$el.html(this.template(this.collection.at(0).attributes));
        // this.$el.html('<div class="loading">Please wait...</div>');
      } else {
        this.$el.html(this.template(this.model.attributes));
      }
      return this;
    }
  },

  template: templateURL('src/templates/videoPlayer.html')

});
