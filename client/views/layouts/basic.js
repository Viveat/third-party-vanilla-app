Template.basicLayout.events({
  "click .pusher.dimmed": function(e, t){
    $('.ui.sidebar.visible')
      .sidebar('hide');
    return false;
  }
});
