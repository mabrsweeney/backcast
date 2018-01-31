var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    
    this.collection.on('select', function(element) {
      this.model = element;
      this.$el.html('<div class="loading">Please wait...</div>');
      this.render();
      if ($('.autoplay').find('span').text() === 'on'){
        var frame = $('iframe').attr('src') + '?autoplay=1';
        $('iframe').attr('src', frame);
      }
    }, this);
    
    this.listenTo(this.collection, 'sync', function(element) {
      this.model = this.collection.at(0);
      this.model.select();
      this.$el.html('<div class="loading">Please wait...</div>');
      this.render();
    });   
  },
  
  render: function() {
    
    if (this.collection.length) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
