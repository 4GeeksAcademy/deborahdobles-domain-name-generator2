/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
let pronouns = ["our", "his", "their", "my", "your"];
let adjectives = ["great", "amazing", "fun", "outrageous", "bad"];
let nouns = ["beach", "pool", "towel", "home", "family"];

function generateDomainName(pronoun, adjective, noun) {
  return `${pronoun}${adjective}${noun}.com`;
}

for (let pronoun of pronouns) {
  for (let adjective of adjectives) {
    for (let noun of nouns) {
      console.log(`${pronoun}${adjective}${noun}.com`);
    }
  }
}
