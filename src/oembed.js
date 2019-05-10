import getSentence from "./motivational_sentence.js";

export default (req, res) => {
  const { motivationalSentenceTop, motivationalSentenceBottom } = getSentence();

  const output = {
    type: "link",
    version: "1.0",
    title: motivationalSentenceTop + motivationalSentenceBottom,
    url: "https://gooodjob.team",
    cache_age: 4 * 60 * 60 // 4 hours
  };

  res.end(JSON.stringify(output));
};
