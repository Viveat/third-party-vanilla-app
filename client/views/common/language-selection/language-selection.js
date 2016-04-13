Template.languageSelection.onCreated(function() {
  LanguagesFlag = [{
    language: 'it',
    flag: 'it'
  }, {
    language: 'en',
    flag: 'en'
  }];
});

Template.languageSelection.helpers({
  flags: function() {
    return LanguagesFlag;
  }
});

Template.singleFlag.events({
  "click #flag-btn": function(e, t) {
    TAPi18n.setLanguage(this.flag.language);
  }
});

Template.singleFlag.helpers({
  notSelected: function() {
    return this.flag.language != TAPi18n.getLanguage();
  }
});
