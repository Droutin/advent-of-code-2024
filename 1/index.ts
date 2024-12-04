import { readLines } from "../helpers/read-lines";

const rows = await readLines("./1/input.txt");

const firstList: number[] = [];
const secondList: number[] = [];

for (const row of rows) {
  const [first, second] = row.split("  ");
  firstList.push(+first);
  secondList.push(+second);
}

firstList.sort();
secondList.sort();

const distances: number[] = [];
const similiarities: number[] = [];

for (let index = 0; index < firstList.length; index++) {
  let dist = firstList[index] - secondList[index];
  if (dist < 0) {
    dist *= -1;
  }
  distances.push(dist);

  const id = firstList[index];
  const otherIds = secondList.filter((val) => val === id);
  similiarities.push(id * otherIds.length);
}

console.log(
  distances.reduce((acc, val) => {
    return acc + val;
  }, 0)
);
console.log(
  similiarities.reduce((acc, val) => {
    return acc + val;
  }, 0)
);
