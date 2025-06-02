import getPerson from "./function/get-person";
import giveAway from "./function/giveawey";
import announceWinner from "./ui/terminal";

const person = getPerson("src/data/data.csv");
const winner = giveAway(person);

announceWinner(winner);
