class app.models.TwitterModel extends app.models.DataModel

  search: (query) ->
    url = "http://search.twitter.com/search.json?q=#{query}"
    this.getData(url, dataType: "jsonp").
      done (data) ->
        $(window).trigger "TwitterModel::search", data
