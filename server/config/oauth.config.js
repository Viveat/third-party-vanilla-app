// Set up login services
Meteor.startup(function() {
  // Add Google configuration entry
  ServiceConfiguration.configurations.update({
    "service": "google"
  }, {
    $set: {
      "clientId" : "747767501150-eujko8to808580c630h329n6bnm6am0c.apps.googleusercontent.com",
      "secret" : "6MpewvOdF9Z4juSsLrTU1sMm",
      "loginStyle" : "popup"
    }
  }, {
    upsert: true
  });
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.update({
    "service": "facebook"
  }, {
    $set: {
      "appId": "979275445452967",
      "secret": "c91b2ee529b900b767a88eb85da96257",
      "loginStyle": "popup"
    }
  }, {
    upsert: true
  });
  // Add Twitter configuration entry
  ServiceConfiguration.configurations.update({
    "service": "twitter"
  }, {
    $set: {
      "consumerKey": "AnjAFPCVLrYwVUigcYnuDwvLi",
      "secret": "l8bSO5JVQzXtaOg1ARloewWdGtW05PjmyXxdvkR6lNOsGBpCMh",
      "loginStyle": "popup"
    }
  }, {
    upsert: true
  });
});
