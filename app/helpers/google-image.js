import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(searchterm) {

  var image;

  Ember.$.ajax({
    url: "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + searchterm + "&callback=?",
    dataType: "jsonp",
    async: false,
    success: function(data) {
      image = data.responseData.results[0].tbUrl;
    }

  });

  Ember.Logger.log(image);

  return new Ember.Handlebars.SafeString('<img src="' + image + '">');

});
