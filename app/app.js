/* global window, Ember */
window.Blog = Ember.Application.create({
});

// Load mixins before anything else
require('mixins/*');

require('store');
require('modules/*/models/*');
require('modules/*/routes/*');
require('modules/*/controllers/*');
require('modules/*/views/*');
require('helpers/*');
require('router');
