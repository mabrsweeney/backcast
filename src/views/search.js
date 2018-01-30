var SearchView = Backbone.View.extend({

  events: {
    'click button': 'doSearch',
    'keyup input': 'handleKeyUp'
  },
  
  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      this.doSearch();
    }
  },
  
  doSearch: function() {
    var query = $('input').val();
    $('input').val('');
    this.collection.search(query);
  },

  el: '.search',
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
