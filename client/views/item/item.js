Template.item.helpers({
  item: function(){
    return Items.findOne(this.itemId);
  }
});
