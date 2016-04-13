Template.sidebar.onRendered(function() {
  $('.ui.sidebar.main-sidebar')
    .sidebar({
      closable: false,
    })
});

Template.sidebar.events({
  "click a": function(e, t) {
    $('.ui.sidebar.main-sidebar')
      .sidebar('hide');
  },
  "click .close": function(e, t) {
    $('.ui.sidebar.main-sidebar')
      .sidebar('hide');
  }
});

Template.sidebar.helpers({
  user : function() {
    return Meteor.user();
  }
});
