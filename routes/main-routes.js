// Home Route
Router.route('/', {
  name: 'home',
  waitOn: function() {
    return [
      // Meteor.subscribe("items")
    ]
  },
  action: function() {
    this.render();
    SEO.set({
      title: Meteor.App.NAME + ' - Home'
    });
  }
});
