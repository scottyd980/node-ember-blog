module("Index", {
  setup: function () {
    Blog.reset();
  }
});

test("First H1 contains Blog", function () {
  visit('/').then(function () {
    equal($('#ember h1').html(), 'Blog', 'Title is Blog');
  });
});

