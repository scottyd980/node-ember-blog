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