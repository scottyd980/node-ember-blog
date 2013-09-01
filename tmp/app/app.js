(function() {

/* global window, Ember */
window.Blog = Ember.Application.create({
});

// Load mixins and components before anything else


})();

(function() {

Blog.TodoItemComponent = Ember.Component.extend({
  item: null,

  keyDown: function (event) {
    if (event.which === 13) {
      event.preventDefault();

      var item = this.get('item'),
        editable = this.$('.todo-editable');
      item.set('name', editable.text());
      
      item.save();
      

      editable.prop('contenteditable', false).blur();
    }
  },

  actions: {
    edit: function () {
      this.$('.todo-editable').prop('contenteditable', true).focus();
    },

    delete: function () {
      var item = this.get('item');
      
      item.deleteRecord();
      //item.save();
      
    }
  }
});


})();

(function() {


Blog.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.FixtureAdapter.create()
});



})();

(function() {


Blog.Site = DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string')
});

Blog.Site.FIXTURES = [
  {
    id: 1,
    title: 'About',
    link: 'about'
  },
  {
    id: 2,
    title: 'Contact',
    link: 'contact'
  },
  {
    id: 3,
    title: 'Todos',
    link: 'todos'
  }
];



})();

(function() {


  Blog.Todo = DS.Model.extend({
    name: DS.attr('string'),
    isDone: DS.attr('boolean')
  });

  Blog.Todo.FIXTURES = [{
    id: 'a',
    name: 'Walk the dog',
    isDone: false
  }, {
    id: 'b',
    name: 'Buy groceries',
    isDone: false
  }]; 


})();

(function() {

Blog.ApplicationRoute = Ember.Route.extend({

  model: function(params) { 
      return this.store.find('site'); 
  }
});


})();

(function() {

Blog.TodosRoute = Ember.Route.extend({
  model: function(params) { 
      return this.store.find('todo'); 
  }
});


})();

(function() {

Blog.AboutController = Ember.Controller.extend({
  someText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero massa, mollis.'
});

})();

(function() {

Blog.ApplicationController = Ember.ArrayController.extend({
});

})();

(function() {

Blog.TodosIndexController = Ember.Controller.extend({
  needs: ['todos'],

  actions: {
    newTodo: function() { 
        this.store.createRecord('todo', {
          name: 'Get r done'
        }); 
    },

    clearDone: function() {
      var todos = this.get('controllers.todos');
      var allDone = todos.filter(function(todo) {
        return todo.get('isDone');
      });

      while (allDone.length > 0) {
        var todo = allDone.pop(); 
          todo.deleteRecord();
          //todo.save(); 
      }
    }
  }
});


})();

(function() {

Blog.TodosController = Ember.ArrayController.extend({
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
  this.route('contact', { path: '/contact_me' });

  this.resource('todos', function () {
    this.route('index', { path: '/' });
  });
});


})();