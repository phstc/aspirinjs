app.views.TwitterView = (function(){
  function TwitterView(){}

  var twitterModel = new app.models.TwitterModel();

  TwitterView.prototype.render = function(){
    var that = this;
    $("#search-query").focus();
    $("#search-form").submit(function(event){
      event.preventDefault();
      that.search();
    });

    $(window).on("TwitterModel::search", printSearchResults);
  };

  TwitterView.prototype.search = function(){
    $("#search-results").html("Loading...");
    var searchQuery = $("#search-query").val();

    twitterModel.search(searchQuery);
  };

  function printSearchResults(event, data){
    var resultsContainer = $("<ul></ul>");
    for(var i = 0; i < data.results.length; i++){
      var result = data.results[i];
      resultsContainer.append("<li>" + result.text + "</li>");
    }
    $("#search-results").html(resultsContainer);
  }

  return TwitterView;
})();

$(function(){
  var twitterView = new app.views.TwitterView();
  twitterView.render();
})
