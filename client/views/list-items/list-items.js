Template.listItems.helpers({
  items: function(){
    return Items.find().fetch();
  }
});
