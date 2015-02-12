
import DS from 'ember-data';

export default DS.Model.extend({
    'title': '',
    'artists': [],
    'album': {},
    'year': undefined,
    'artist': function() {
        return this.get('artists')
                   .map(function(artist) { return artist.name; })
                   .join(', ');
    }.property('artists')
});
