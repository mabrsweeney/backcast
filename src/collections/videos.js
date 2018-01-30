var Videos = Backbone.Collection.extend({

  model: Video,

  search: function() {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3',
      type: 'GET',
      data: {
        query: 'string to search for',
        maxResults: 5,
        key: 'AIzaSyAN9t518dA2FZZvjhrXtwVDWmaTq8goYNs',
        videoEmbeddable: true
      },

      success: function(data) {
        console.log(data);
      },
      error: function(data) {
        console.log('Error: Could not fetch data -> ' + data);
      }
    });
  }

});
