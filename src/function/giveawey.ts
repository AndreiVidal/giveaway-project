import Person from "../model/Person";

export default function giveaway(persons: Person[]): Person {
  let remaining = [...persons];
  for (let i = 0; i < persons.length; i++) {
    remaining = everyoneExceptOne(remaining);
  }
  return remaining[0];
}

function everyoneExceptOne(person: Person[]): Person[] {
  if (person.length === 1) return person;

  const raffled = Math.floor(Math.random() * person.length);
  return person.splice(raffled, 1);
}
