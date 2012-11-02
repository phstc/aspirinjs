window.app =
  models: {}
  views: {}


class app.models.DataModel

  getData:  (url, data={}) ->
    $.ajax url, data

