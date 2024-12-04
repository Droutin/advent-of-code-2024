export async function readLines(filepath: string): Promise<string[]> {
  const file = Bun.file(filepath);
  const input = await file.text();
  return input.trim().replace(/\r\n/g, "\n").split("\n");
}

export async function readFile(filepath: string): Promise<string> {
  const file = Bun.file(filepath);
  const input = await file.text();
  return input.trim().replace(/\r\n/g, "\n");
}
