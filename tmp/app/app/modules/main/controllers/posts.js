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