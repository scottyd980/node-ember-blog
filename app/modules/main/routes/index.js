Blog.IndexRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    
    controller.set('content', Blog.Site.find());
    
  }
});
