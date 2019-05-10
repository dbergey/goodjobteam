import goodSynonyms from "./synonyms/good.js";
import teamSynonyms from "./synonyms/team.js";
import workSynonyms from "./synonyms/work.js";
import randomFactory from "./random.js";

function chooseWith(random, wordList) {
  return wordList[Math.floor(random() * wordList.length)];
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function getSentence() {
  const today = new Date();
  const random = randomFactory(
    `${today.getFullYear()}${today.getMonth()}${today.getDate()}`
  );
  const choose = chooseWith.bind(undefined, random);

  const motivationalSentenceTop = `${capitalizeFirstLetter(
    choose(goodSynonyms)
  )} ${choose(workSynonyms)}, `;

  const motivationalSentenceBottom = `${choose(teamSynonyms)}!`;

  return { motivationalSentenceTop, motivationalSentenceBottom };
}
