Template.header.events({
  'click #sidebar-toggle': function() {
    $('.ui.sidebar.main-sidebar')
      .sidebar('toggle');
    return false;
  }
});
