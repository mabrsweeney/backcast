var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.search = new SearchView();
    this.search.render();
    this.videoList = new VideoListView({collection: this.videos, el: '.list'});
    this.videoList.render();
    this.videoPlayer = new VideoPlayerView({collection: this.videos});
    this.videoPlayer.render();


  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
