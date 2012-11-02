class app.views.TwitterView

  twitterModel = new app.models.TwitterModel()

  render: ->
    $("#search-query").focus()
    $("#search-form").submit (event) =>
      event.preventDefault()
      @search()
    # $(window).on("TwitterModel::search", @printSearchResults)

  search: ->
    $("#search-results").html "Loading..."
    searchQuery = $("#search-query").val()

    twitterModel.search searchQuery

    $(window).off "TwitterModel::search"
    $(window).on "TwitterModel::search", @printSearchResults

  printSearchResults: (event, data) ->
    resultsContainer = $ "<ul></ul>"
    for result in data.results
      resultsContainer.append "<li>#{result.text}</li>"
    # for(var i = 0; i < data.results.length; i++){
      # var result = data.results[i];
      # resultsContainer.append("<li>" + result.text + "</li>");
    # }
    $("#search-results").html resultsContainer

$ ->
  twitterView = new app.views.TwitterView()
  twitterView.render()

