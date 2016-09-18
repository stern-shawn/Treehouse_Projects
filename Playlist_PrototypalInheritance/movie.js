function Movie(title, year, duration) {
  // Decorate song object with media properties
  Media.call(this, title, duration);
  this.year = year;
}

// Copies media properties/methods to the Song
Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
  var htmlString = '<li';
  if (this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' (';
  htmlString += this.year;
  htmlString += ') ';
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  
  return htmlString;
};