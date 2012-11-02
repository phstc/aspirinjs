describe "Data model", ->

  it "gets data from an url", ->
    data_model = new app.models.DataModel
    spyOn $, "ajax"
    data_model.getData "localhost"
    expect($.ajax).toHaveBeenCalledWith "localhost", {}
