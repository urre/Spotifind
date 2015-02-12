
import Ember from "ember";


export default Ember.Handlebars.helper('spotify-link', function(uri, title) {
    // var url = SpotifyExplorer.Helpers.spotifyURL(uri);
    var url = function(uri) {
        var parts = uri.split(':');

        if (parts.length === 3 && parts[0] === "spotify") {
            return "http://open.spotify.com/" + parts[1] + "/" + parts[2];
        }
        return uri;
    };

    return new Ember.Handlebars.SafeString('<a href="' + url + '">' + title + '</a>');
});

// from http://stackoverflow.com/a/6313008
export default Ember.Handlebars.helper('format-time', function(secs) {
    var sec_num = parseInt(secs, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    var time    = minutes+':'+seconds;
    if (hours !== "00") { time = hours+':'+time; }

    return time;
});
