// Publish all items from API
Meteor.publish('items', function() {
  var self = this,
    API_URL = Meteor.settings.private.API.API_URL,
    API_HEADER = Meteor.settings.private.API.HTTP_HEADERS_AUTH_API;

  try {
    var response = HTTP.get(API_URL + '/products', API_HEADER),
      items = response.data.products;

    _.each(items, function(item) {
      self.added('items', item.id, item);
    });

    self.ready();
  } catch (error) {
    console.log(error);
  }
});

// Publish a single item from API
Meteor.publish('item', function(itemId) {
  var self = this,
    API_URL = Meteor.settings.private.API.API_URL,
    API_HEADER = Meteor.settings.private.API.HTTP_HEADERS_AUTH_API;

  try {
    var response = HTTP.get(API_URL + '/products/' + itemId, API_HEADER),
      item = response.data;

    self.added('items', item.id, item);

    self.ready();
  } catch (error) {
    console.log(error);
  }
});
