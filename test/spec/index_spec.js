describe("Index", function() {
  beforeEach(function () {
    Ember.run(Blog, Blog.advanceReadiness);
  });
  afterEach(function (done) {
    Blog.reset();
    done();
  });

  it("contains the words 'Welcome to Ember.js on Charcoal'", function(done) {
    visit("/").then(function() {
      expect($("#ember h1").html()).to.be.equal("Blog");
      done();

      // finishes loading fixtures so Ember Data doesn't throw an error after
      // App.reset() in teardown
      Ember.run.sync();
    });
  });
});
