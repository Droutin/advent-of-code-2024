import { readLines } from "../helpers/read-lines";

async function solution() {
  console.time();
  const input = await readLines("./4/example.txt");
  console.log(`${input.length}x${input[0].length}`);

  const rows = input;
  const cols = getCols(rows);
  const leftDiagonals = getLeftDiagonals(rows);
  const rightDiagonals = getRightDiagonals(rows);
  const count = [...rows, ...cols, ...leftDiagonals, ...rightDiagonals].reduce(
    (acc, line) => acc + countXmas(line),
    0
  );
  console.log(count);
  console.timeEnd();
}

function getCols(lines: string[]) {
  const cols: string[] = [];

  const lastIndex = lines.length - 1;

  for (let rowIndex = 0; rowIndex <= lastIndex; rowIndex++) {
    for (let colIndex = 0; colIndex <= lastIndex; colIndex++) {
      const line = lines[rowIndex];
      if (!line) continue;
      const char = line[colIndex];
      if (!cols[colIndex]) cols[colIndex] = "";
      cols[colIndex] += char;
    }
  }

  return cols;
}

function getLeftDiagonals(lines: string[]) {
  const diagonals: string[] = [];

  const lastIndex = lines.length - 1;

  for (let rowIndex = 0; rowIndex <= lastIndex; rowIndex++) {
    for (let colIndex = 0; colIndex <= lastIndex; colIndex++) {
      const line = lines[rowIndex + colIndex];
      if (!line) continue;
      const char = line[colIndex];
      if (!diagonals[rowIndex]) diagonals[rowIndex] = "";
      diagonals[rowIndex] += char;
    }
  }

  return diagonals;
}

function getRightDiagonals(lines: string[]) {
  const diagonals: string[] = [];

  const lastIndex = lines.length - 1;

  for (let rowIndex = 0; rowIndex <= lastIndex; rowIndex++) {
    for (let colIndex = lastIndex; colIndex >= 0; colIndex--) {
      const line = lines[rowIndex + (lastIndex - colIndex)];
      if (!line) continue;
      const char = line[colIndex];
      if (!diagonals[rowIndex]) diagonals[rowIndex] = "";
      diagonals[rowIndex] += char;
    }
  }

  return diagonals;
}

// function removeDuplicates(lines: string[]) {
//   return lines.reduce<string[]>((acc, item) => {
//     const map = new Map<string, string>();
//     for (const char of item) {
//       map.set(char, char);
//     }
//     acc.push([...map.values()].join(""));
//     return acc;
//   }, []);
// }

function countXmas(line: string) {
  return (
    [...line.matchAll(/XMAS/g)].length + [...line.matchAll(/SAMX/g)].length
  );
}

await solution();
