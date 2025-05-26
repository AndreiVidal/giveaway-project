import getPerson from "./function/get-person";

const person = getPerson("src/data/datas.csv");

person.forEach(p => console.log(p.toString()));