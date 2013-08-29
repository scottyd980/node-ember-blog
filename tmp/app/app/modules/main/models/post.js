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

