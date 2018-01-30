var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('Power Rangers');
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    
    this.search = new SearchView({
      collection: this.videos, 
      el: '.search'
    });
    this.search.render();

    this.videoList = new VideoListView({
      collection: this.videos, 
      el: '.list'
    });
    this.videoList.render();
    
    this.videoPlayer = new VideoPlayerView({
      model: this.videos.at(0), 
      collection: this.videos, 
      el: '.player'
    });
    this.videoPlayer.render();
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
