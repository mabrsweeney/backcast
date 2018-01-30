var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    // this.listenTo(this.collection, 'select', this.render);
    this.collection.on('select', function(element) {
      this.model = element;
      this.render();
    }, this);
  },
  render: function(model) {
    if (!this.model) {
      this.$el.html(this.template(this.collection.at(0).attributes));
      // this.$el.html('<div class="loading">Please wait...</div>');
    } else {
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
