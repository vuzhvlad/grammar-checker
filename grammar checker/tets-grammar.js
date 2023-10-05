let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';
// .split(' ') - converts from string to an array with ' ' and stores every word seperetly in array
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
//console.log(storyWords);

let count = 0;

// counts how many letters there is in a text
storyWords.forEach((word) => {
  count++;
});
console.log(count);

//removes a word form array and stores it as a new array
storyWords = storyWords.filter((word) => {
  if (word !== unnecessaryWord) {
    return word;
  }
});

// replace wrong spelled word with right spelled one and stores it as a new array
 storyWords = storyWords.map((word) => {
  return word === misspelledWord ? 'beautiful' : word;
});

//finds index of a bad word
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});
console.log(badWordIndex);

//checks if there is any words longer or equal 10
storyWords[78] = "really";
let lengthCheck = storyWords.every((word) => {
  return word.length <= 10; 
});
console.log(lengthCheck);

//finds index of word that is longer than 10
let longWordIndex = storyWords.findIndex((word) => {
  return word.length > 10;
});
console.log(longWordIndex);

// goes through all words to find an element that is more than 10 and then replace it with another word
let longWord = storyWords.forEach((word) => {
  if (word.length > 10 ) {
    storyWords[111] = "stunning";
  }
});

// .join(' ') changes array into string with '  ' between each element of array
console.log(storyWords.join(' '));