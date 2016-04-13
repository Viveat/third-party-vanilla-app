/******************************************************
 * Items Routes
 ******************************************************/

// List Items Route
Router.route('/list-items', {
  name: 'listItems',
  waitOn: function() {
    return [
      Meteor.subscribe("items")
    ]
  },
  action: function() {
    this.render();
    SEO.set({
      title: Meteor.App.NAME + ' - List Items'
    });
  }
});

// Single Item Route
Router.route('/item/:id', {
  name: 'item',
  waitOn: function() {
    return [
      Meteor.subscribe("item", this.params.id)
    ]
  },
  action: function() {
    this.render();
    var itemId = parseInt(this.params.id),
      item = Items.findOne(itemId);

    SEO.set({
      title: Meteor.App.NAME + ' - ' + item.name
    });
  },
  data: function() {
    return {
      itemId: parseInt(this.params.id)
    }
  }
});
