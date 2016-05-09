Items = new orion.collection('items', {
  singularName: 'item', // The name of one of these items
  pluralName: 'items', // The name of more than one of these items
  title: 'items', // The title in the index of the collection
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: 'Items'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "name", title: "Name" },
      orion.attributeColumn('froala', 'description', 'Description'),
      { data: "price", title: "Price" },
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

/**
 * Now we will attach the schema for that collection.
 */
Items.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  description: orion.attribute('froala', {
    label: 'Description'
  }),
  price: {
    type: String
  },
  image: {
    type: String
  },
  viveatItemId: {
    type: String
  },
  createdBy: orion.attribute('createdBy')
}));
