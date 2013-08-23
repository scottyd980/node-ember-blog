(function() {

/* global window, Ember */
window.Blog = Ember.Application.create({
});

// Load mixins before anything else


})();

(function() {


Blog.Store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter.create()
});



})();

(function() {


Blog.Site = DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string')
});

Blog.Site.FIXTURES = [
  {
    id: 1,
    title: 'geekingreen.com',
    url: 'http://geekingreen.com'
  },
  {
    id: 2,
    title: 'Reddit',
    url: 'http://reddit.com'
  }
];



})();

(function() {

Blog.IndexRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    
    controller.set('content', Blog.Site.find());
    
  }
});


})();

(function() {

Blog.AboutController = Ember.Controller.extend({
  someText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero massa, mollis.'
});

})();

(function() {

Blog.IndexController = Ember.ArrayController.extend({
});

})();

(function() {

Blog.IndexView = Ember.View.extend({
});

})();

(function() {

Ember.Handlebars.registerBoundHelper('wordCount', function (value) {
  var ret;
  if (typeof value === 'string' && value.length) {
    return ((ret = value.trim().match(/\s+/g).length) > 0) ? (ret + 1) : 1;
  }
  return '0';
});

})();

(function() {

Blog.Router.map(function() {
    this.route('about', { path: '/about' });
});

})();