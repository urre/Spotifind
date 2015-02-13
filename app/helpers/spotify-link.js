
import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(uri, title) {

    var parts = uri.split(':');
    var url;

    if (parts.length === 3 && parts[0] === "spotify") {
        url = "http://open.spotify.com/" + parts[1] + "/" + parts[2];
    }

    return new Ember.Handlebars.SafeString('<a href="' + url + '">' + title + '</a>');
});
