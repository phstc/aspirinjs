(function() {

  describe("Twitter Model", function() {
    it("searches tweets", function() {
      var twitter;
      twitter = new app.models.TwitterModel;
      spyOn($, "ajax").andReturn({
        success: function() {}
      });
      twitter.search("vapormvc");
      return expect($.ajax).toHaveBeenCalledWith("http://search.twitter.com/search.json?q=vapormvc", {
        dataType: "jsonp"
      });
    });
    return xit("triggers callbacks", function() {});
  });

}).call(this);
