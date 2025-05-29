import getPerson from "./function/get-person";
import giveAway from "./function/giveawey";
const person = getPerson("src/data/data.csv");
const winner = giveAway(person);
console.log(`The winner is: ${winner.toString()}`);
