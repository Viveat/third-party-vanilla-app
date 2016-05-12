Router.configure({
  layoutTemplate: 'basicLayout',
  notFoundTemplate: 'notFound'
});

Router.route('/admin/importer', {
  name: 'importer',
  layoutTemplate: 'orionSemanticLayout',
  template: 'importer'
});
