var SearchView = Backbone.View.extend({
  
  events: {
    'click button': 'handleClick',
    'keyup input': 'handleKeyUp'
  },
  
  handleKeyUp: function(e) {
    if (e.keyCode === 13) {
      $('input').val('');
      return;
    }
    this.doSearch();
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
