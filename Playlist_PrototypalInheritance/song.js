function Song(title, artist, duration) {
  // Decorate song object with media properties
  Media.call(this, title, duration);
  this.artist = artist;
}

// Copies media properties/methods to the Song
Song.prototype = Object.create(Media.prototype);

Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if (this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  
  return htmlString;
};