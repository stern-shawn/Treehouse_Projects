var expect = require('chai').expect

expect(true).to.be.true

function titleCase (title) {
  var words = title.split(' ')

  // Apply the capitalize first letter, return remainder of word logic to
  // the entire title
  var titleCasedWords = words.map(function (word) {
    return word[0].toUpperCase() + word.substring(1)
  })

  return titleCasedWords.join(' ')
}

expect(titleCase('the great mouse detective')).to.be.a('string')
expect(titleCase('a')).to.equal('A')
expect(titleCase('vertigo')).to.equal('Vertigo')

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective')
