/* global window, Ember */
window.Blog = Ember.Application.create({
});

// Load mixins and components before anything else
require('mixins/*');
require('components/*');

require('store');
require('modules/*/models/*');
require('modules/*/routes/*');
require('modules/*/controllers/*');
require('modules/*/views/*');
require('helpers/*');
require('router');
