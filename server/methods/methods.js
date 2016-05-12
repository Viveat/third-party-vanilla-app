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
  },
  "performItemsImport": function performItemsImport(itemsJson) {
    var items = _
      .chain(JSON.parse(itemsJson))
      .map(function(itemObj) {
        var item = _.omit(itemObj, 'id');
        item['viveatId'] = itemObj.id;
        return item;
      })
      .value();

    var response;

    Items.batchInsert(items, function(err, res) {
      if (err) {
        throw new Meteor.Error('Error inserting the documents');
      }
      response = res;
    });

    return response;
  }
});
