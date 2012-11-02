app.models.DataModel = (function(){
  function DataModel(){}

  DataModel.prototype.getData = function(url, data){
    if(data === null){
      data = {}
    }
    return $.ajax(url, data);
  };

  return DataModel;
})();
