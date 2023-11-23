console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let album = { title, artist, yearPublished };
  collection.push(album);
  return album;
}


let album0 = addToCollection(myCollection, 'Shaved Headers', 'Britney Spears', 2007);
let album1 = addToCollection(myCollection, 'Trapped in the Closet', 'R. Kelly', 2005);
let album2 = addToCollection(myCollection, 'Dating Travis Kelse', 'Taylor Swift', 2023);
let album3 = addToCollection(myCollection, 'Merry Christmas', 'Mariah Carey', 2020);
let album4 = addToCollection(myCollection, 'The Pick of Destiny', 'Tenacious D', 2006);
let album5 = addToCollection(myCollection, 'Sandstorm', 'Darude', 2009);


//addToCollection(myCollection, 'Shaved Headers', 'Britney Spears', 2007);
//let album0 = addToCollection(myCollection, 'Shaved Headers', 'Britney Spears', 2007);

console.log (album0);
console.log (album1);
console.log (album2);
console.log (album3);
console.log (album4);
console.log (album5);




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
