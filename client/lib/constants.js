// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Lorem Ipsum',
  DESCRIPTION: 'Lorem Ipsum Desc',
  VIVEAT_APP_ID: Meteor.settings.public.VIVEAT_APP_ID,
  SMALL_LOGO: "/images/logos/loremipsum-logo.png",
  BIG_LOGO: "/images/logos/loremipsum-logo.png",
  SIGNIN: false
};
