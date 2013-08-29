
Blog.Store = DS.Store.extend({
	revision: 13,
	adapter: DS.FixtureAdapter.create()
//	adapter: DS.RESTAdapter.extend({
//		url: 'http://localhost:3000/api'
//	})
});

