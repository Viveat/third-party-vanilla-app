Meteor.methods({
  "updateUser": function (doc) {
    check(doc, Schemas.User);

    var updateObj = {
      'username': doc.username,
      'emails.0.address': doc.email,
      'profile.name': doc.name,
      'profile.lastname': doc.lastname,
      'profile.dob': doc.dob,
      'profile.gender': doc.gender,
    };

    Meteor.users.update(this.userId, {
      $set: updateObj
    }, function(error) {
      if(error){
        console.log("Update Profile Error", error);
        return false;
      }
    });
    return true;
  }
});
