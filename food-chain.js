var Song = function(lyrics) {
  // split the sont at 2 new lines.
  this.verseArray = lyrics.split('\n\n');
};

Song.prototype.verse = function(start) {
  // return the array at the start -1 and add a new line
  return this.verseArray[start -1] + '\n';
};

Song.prototype.verses = function(start, end) {
  // each is now the array and join with 2 new lines between
  var each = this.verseArray.slice(start -1, end);
  return each.join('\n\n') + '\n\n';
};

Song.prototype.sing = function() {
  // end is the arrays length.
  var end = this.verseArray.length;
  // return the verse starting at 1 and ending at the last
  return this.verse(1, end);
};

Song.oldLadySong = function() {
  return new Song(oldLadySong);
};


var oldLadySong = "\
I know an old lady who swallowed a fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a spider.\n\
It wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a bird.\n\
How absurd to swallow a bird!\n\
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a cat.\n\
Imagine that, to swallow a cat!\n\
She swallowed the cat to catch the bird.\n\
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a dog.\n\
What a hog, to swallow a dog!\n\
She swallowed the dog to catch the cat.\n\
She swallowed the cat to catch the bird.\n\
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a goat.\n\
Just opened her throat and swallowed a goat!\n\
She swallowed the goat to catch the dog.\n\
She swallowed the dog to catch the cat.\n\
She swallowed the cat to catch the bird.\n\
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a cow.\n\
I don't know how she swallowed a cow!\n\
She swallowed the cow to catch the goat.\n\
She swallowed the goat to catch the dog.\n\
She swallowed the dog to catch the cat.\n\
She swallowed the cat to catch the bird.\n\
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n\
She swallowed the spider to catch the fly.\n\
I don't know why she swallowed the fly. Perhaps she'll die.\n\
\n\
I know an old lady who swallowed a horse.\n\
She's dead, of course!";


module.exports = Song.oldLadySong();