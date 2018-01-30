var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    var that = this;
    return Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      dataType: 'json',
      data: {
        part: 'snippet',
        maxResults: 5,
        q: query,
        type: 'video',
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: true
      },

      success: function(data) {
        that.parse(data);
        that.trigger('sync');
      },
      error: function(data) {
        console.log('Error: Could not fetch data -> ' + data);
      }
    });
  },
  
  parse: function(data) {
    this.reset(data.items);
    return data.items;
    //this.add(data.items);
  }

});
