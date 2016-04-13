Tracker.autorun(function() {
     //Update the cookie whenever they log in or out
     Cookie.set("meteor_user_id", Meteor.userId());
     Cookie.set("meteor_token", localStorage.getItem("Meteor.loginToken"));
});

Template.login.onRendered(function(){
  // fix Semantic UI bug that leave pushable class at logout
  $('body').addClass('login-page');
  $('body').removeClass('pushable');
});

Template.login.onDestroyed(function(){
  $('body').removeClass('login-page');
});
