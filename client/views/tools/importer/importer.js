Template.importer.helpers({
  import: function () {
    return new SimpleSchema({
      file: {
        type: String,
        optional: false,
        autoform: {
          afFieldInput: {
            type: "file"
          }
        }
      }
    });
  }
});

Template.importer.events({
  'submit #importerForm': function(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var file = $(evt.currentTarget).find('input[type=file]')[0].files[0],
        fileReader;

    if (!file || !window.FileReader) {
      return;
    }

    fileReader = new FileReader();
    fileReader.readAsText(file);

    fileReader.onerror = function(error) {
      console.log(error);
      return;
    }

    fileReader.onloadend = function(e) {
      Meteor.call('performItemsImport', fileReader.result, function(err, docIds) {
        if (err) {
          // handle error
          console.log(err)
        }
      });
    }
  }
})
