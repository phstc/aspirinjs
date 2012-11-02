describe "Twitter Model", ->

  it "searches tweets", ->
    twitter = new app.models.TwitterModel
    spyOn($, "ajax").andReturn success: ->
    twitter.search "vapormvc"
    expect($.ajax).toHaveBeenCalledWith "http://search.twitter.com/search.json?q=vapormvc", dataType:  "jsonp"

  it "triggers callbacks", ->
    # twitter = new app.models.TwitterModel
    # spyOn($, "ajax").andReturn success: ->
    # spyOn($(window), "trigger").andReturn {}
    # twitter.search "vapormvc"
    # expect($(window)).toHaveBeenCalledWith "TwitterModel::search"
