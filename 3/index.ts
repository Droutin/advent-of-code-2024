import { readFile, readLines } from "../helpers/read-lines";

async function solution() {
  const lines = await readLines("./3/input.txt");

  const validCommands = lines.map((line) => findValidCommands(line));
  const sum = validCommands.reduce((acc, val) => acc + multiply(val), 0);
  console.log("part1", sum);

  const validCommands2 = await findValidCommands2();
  const sum2 = multiply(validCommands2);
  console.log("part2", sum2);
}

function findValidCommands(line: string) {
  const groups = [...line.matchAll(/mul\((\d+),(\d+)\)/g)].map((match) => [
    +match[1],
    +match[2],
  ]);
  return groups;
}

async function findValidCommands2() {
  const input = await readFile("./3/input.txt");

  const normalized = input
    .split("do()")
    .map((i) => i.split("don't()").shift())
    .join();
  return findValidCommands(normalized);
}

function multiply(numbers: number[][]) {
  return numbers.reduce((acc, val) => acc + val[0] * val[1], 0);
}

await solution();
