require "//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"
require "/application.js"
require "/models/data_model.js"

describe "Data model", ->

  it "gets data from an url", ->
    data_model = new app.models.DataModel
    spyOn $, "ajax"
    data_model.getData "localhost"
    expect($.ajax).toHaveBeenCalledWith "localhost", {}
