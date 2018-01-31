var SearchView = Backbone.View.extend({
  
  events: {
    'click .sb': 'handleClick',
    'keyup input': 'handleKeyUp',
    'click .autoplay': 'handleAutoPlay'
  },
  
  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      $('input').val('');
      return;
    }
    this.doSearch();
  },
  
  handleAutoPlay: function() {
    if ($('.autoplay').find('span').text() === 'on') {
      $('.autoplay').find('span').text('off'); 
    } else {
      $('.autoplay').find('span').text('on');
    }

  },
  
  handleClick: function() {
    $('input').val('');
    this.doSearch();
  },
  
  doSearch: function() {
    var query = $('input').val();
    this.collection.debounceSearch(query);
  },
  
  render: function() {
    this.$el.html(this.template());
    console.log(this.el);
    return this;
  },

  template: templateURL('src/templates/search.html')

});
