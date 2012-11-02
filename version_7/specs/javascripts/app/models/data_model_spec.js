(function() {

  describe("Data model", function() {
    return it("gets data from an url", function() {
      var data_model;
      data_model = new app.models.DataModel;
      spyOn($, "ajax");
      data_model.getData("localhost");
      return expect($.ajax).toHaveBeenCalledWith("localhost", {});
    });
  });

}).call(this);
