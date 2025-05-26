import Person from "../model/Person";
import fs from "fs";

export default function getPerson(file: string): Person[] {
  try {
    const date = fs.readFileSync(file, "utf-8");
    const lines = date.split("\n");
    const persons = lines
      .filter((line) => line.trim().length > 0)
      .map((line) => {
        const [name, email] = line.split(";");
        return new Person(name.trim(), email.trim());
      });
    return persons;
  } catch (error) {
    console.error("Error reading file: no such file or directory");
    return [];
  }
}
