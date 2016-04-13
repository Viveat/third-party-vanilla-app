// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Lorem Ipsum',
  DESCRIPTION: 'Lorem Ipsum Desc',
  APP_ID: Meteor.settings.public.APP_ID_VIVEAT,
  SMALL_LOGO: "/images/logos/loremipsum-logo.png",
  BIG_LOGO: "/images/logos/loremipsum-logo.png",
  SIGNIN: false
};
