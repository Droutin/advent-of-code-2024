import { readLines } from "../helpers/read-lines";

function solution1(records: number[]) {
  let increasing = true;

  for (let index = 0; index < records.length; index++) {
    const record = records[index];
    const nextRecord = records[index + 1];

    if (nextRecord === undefined) {
      continue;
    }

    if (index === 0) {
      increasing = record < nextRecord;
    }
    if (increasing !== record < nextRecord) {
      return false;
    }

    const diff = Math.abs(nextRecord - record);

    if (diff > 3 || diff < 1) {
      return false;
    }
  }

  return true;
}

function removeAtIndex<T>(arr: T[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function solution2(records: number[]) {
  if (solution1(records)) {
    return true;
  }

  for (let i = 0; i < records.length; i++) {
    const newReport = removeAtIndex(records, i);
    if (solution1(newReport)) {
      return true;
    }
  }

  return false;
}

const lines = await readLines("./2/input.txt");
const reports = lines.map((line) => line.split(" ").map(Number));

const part1 = reports.filter((report) => solution1(report));
const part2 = reports.filter((report) => solution2(report));

console.log(part1.length);
console.log(part2.length);
