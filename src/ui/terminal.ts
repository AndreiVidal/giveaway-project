import * as term from "terminal-kit";
import ora from "ora";
import Person from "../model/Person";
const termKit = term.terminal;

export default async function announceWinner(winner: Person) {
  termKit.clear();
  const spinner = ora("Sorteando o vencedor...").start();
  await new Promise((res) => setTimeout(res, 1500));
  spinner.stop();

  await termKit.slowTyping(`\n O sorteado(a) é: ${winner.toString()} \n`, {
    flashStyle: termKit.bgBrightWhite.red,
    delay: 80,
    style: termKit.brightBlue.bgBrightWhite,
  });

  await new Promise((res) => setTimeout(res, 800));
  termKit("\n");
  termKit.brightBlack.bgWhite.bold(
    `🎉🎉 Parabéns!! ${winner.name}!!! 🎉🎉\n\n`
  );

  process.exit(0);
}
