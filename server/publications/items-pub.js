// Publish all items from API
Meteor.publish('items', function() {
  return Items.find();
});

// Publish a single item from API
Meteor.publish('item', function(itemId) {
  return Items.find({_id: itemId});
});
