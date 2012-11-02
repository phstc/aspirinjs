app.models.TwitterModel = (function(_super){
  function TwitterModel(){
    return _super.prototype.constructor.apply(this, arguments);
  }

  $.extend(TwitterModel.prototype, _super.prototype);

  TwitterModel.prototype.search = function(query){
    var url = "http://search.twitter.com/search.json?q=" + query;
    this.getData(url, { dataType: "jsonp" }).done(function(data){
      $(window).trigger("TwitterModel::search", data);
    });
  };

  return TwitterModel;
})(app.models.DataModel);
