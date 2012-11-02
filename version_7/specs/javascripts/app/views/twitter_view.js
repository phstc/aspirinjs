(function() {

  app.views.TwitterView = (function() {
    var twitterModel;

    function TwitterView() {}

    twitterModel = new app.models.TwitterModel();

    TwitterView.prototype.render = function() {
      var _this = this;
      $("#search-query").focus();
      return $("#search-form").submit(function(event) {
        event.preventDefault();
        return _this.search();
      });
    };

    TwitterView.prototype.search = function() {
      var searchQuery;
      $("#search-results").html("Loading...");
      searchQuery = $("#search-query").val();
      twitterModel.search(searchQuery);
      $(window).off("TwitterModel::search");
      return $(window).on("TwitterModel::search", this.printSearchResults);
    };

    TwitterView.prototype.printSearchResults = function(event, data) {
      var result, resultsContainer, _i, _len, _ref;
      resultsContainer = $("<ul></ul>");
      _ref = data.results;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        result = _ref[_i];
        resultsContainer.append("<li>" + result.text + "</li>");
      }
      return $("#search-results").html(resultsContainer);
    };

    return TwitterView;

  })();

  $(function() {
    var twitterView;
    twitterView = new app.views.TwitterView();
    return twitterView.render();
  });

}).call(this);
