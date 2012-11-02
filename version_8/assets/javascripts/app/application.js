(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.app = {
    models: {},
    views: {}
  };

  app.models.DataModel = (function() {

    function DataModel() {}

    DataModel.prototype.getData = function(url, data) {
      if (data == null) data = {};
      return $.ajax(url, data);
    };

    return DataModel;

  })();

  app.models.TwitterModel = (function(_super) {

    __extends(TwitterModel, _super);

    function TwitterModel() {
      TwitterModel.__super__.constructor.apply(this, arguments);
    }

    TwitterModel.prototype.search = function(query) {
      var url;
      url = "http://search.twitter.com/search.json?q=" + query;
      return this.getData(url, {
        dataType: "jsonp"
      }).success(function(data) {
        return $(window).trigger("TwitterModel::search", data);
      });
    };

    return TwitterModel;

  })(app.models.DataModel);

  app.views.TwitterView = (function() {
    var twitterModel;

    function TwitterView() {}

    twitterModel = new app.models.TwitterModel;

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
    twitterView = new app.views.TwitterView;
    return twitterView.render();
  });

}).call(this);
