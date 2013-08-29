(function() {

/* global window, Ember */
window.Blog = Ember.Application.create({
	LOG_ACTIVE_GENERATION: true
});

// Load mixins before anything else


})();

(function() {


Blog.Store = DS.Store.extend({
	revision: 13,
	adapter: DS.FixtureAdapter.create()
//	adapter: DS.RESTAdapter.extend({
//		url: 'http://localhost:3000/api'
//	})
});



})();

(function() {

Blog.Post = DS.Model.extend({
	title: DS.attr('string'),
	postContent: DS.attr('string'),
	postDate: DS.attr('date'),
	user: DS.belongsTo('Blog.User')
});

Blog.Post.FIXTURES = [
  {
    id: 1,
    title: 'Post 1',
    postContent: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
    user: 1
  },
  {
    id: 2,
    title: 'Post 2',
    postContent: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.',
    user: 1
  }
];



})();

(function() {

Blog.User = DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	email: DS.attr('string'),
	description: DS.attr('string'),
	joinDate: DS.attr('date'),
	fullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}.property('firstName', 'lastName'),
	posts: DS.hasMany('Blog.Post')
});

Blog.User.FIXTURES = [
  {
    id: 1,
    firstName: 'Scott',
    lastName: 'Douglass',
    email: 'scott@scottyd.net',
    description: '',
    joinDate: new Date(2013, 08, 24)
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

Blog.PostsNewController = Ember.ArrayController.extend({
	publishPost: function() {
		var title = this.get('title')
		, postContent = this.get('postContent');
		
		if (!title.trim() || !postContent.trim()) { return; }
		
		var post = Blog.Post.createRecord({
			title: title,
			postContent: postContent,
			postDate: new Date(),
			user: Blog.User.find(1)
		});
		
		post.save();
		
		this.transitionToRoute('posts');
	}
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
    this.resource('posts', function() {
    	this.route('new');
    });
    
    this.route('post', { path: '/post/:post_id'});
    //this.resource('about');
});

Blog.IndexRoute = Ember.Route.extend({
	model: function() {
		return Blog.Post.find();
	}
});

Blog.PostsIndexRoute =  Ember.Route.extend({
	model: function() {
		return Blog.Post.find();
	}
});

Blog.PostRoute = Ember.Route.extend({
	renderTemplate: function() {
		this.render('post/index');
	}
});

})();