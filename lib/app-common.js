/*******************************************************************************
 * Common Functions
 ******************************************************************************/

// Group here helper code for the whole app


AppCommon = {
  fields: {
    createdAt: {
      type: Date,
      autoform: {
        disabled: true,
        type: "hidden"
      },
      autoValue: function() {
        if (this.isInsert) {
          return new Date;
        } else {
          this.unset();
        }
      }
    },
    updatedAt: {
      type: Date,
      optional: true,
      autoform: {
        disabled: true,
        type: "hidden"
      },
      autoValue: function() {
        return new Date;
      }
    },
  },
  utils: {
    yearsList: function(value, label) {
      return _.map(_.range(new Date().getFullYear(), new Date().getFullYear() - 100, -1), function(year) {
        var option = {};
        option[value] = year.toString();
        option[label] = year.toString();
        return option;
      });
    }
  }
};
