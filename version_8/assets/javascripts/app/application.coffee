window.app =
  models: {}
  views: {}

$ ->
  twitterView = new app.views.TwitterView
  twitterView.render()
