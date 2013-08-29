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

