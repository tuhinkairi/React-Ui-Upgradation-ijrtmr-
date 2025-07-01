export function parseReference(rawText: string): string[] {
  const lines = rawText.split('\n').map(line => line.trim()).filter(line => line !== '');
  const citations: string[] = [];

  let current = "";

  for (const line of lines) {
    if (/^\d+\./.test(line)) {
      if (current) citations.push(current.trim());
      current = line;
    } else {
      current += ' ' + line;
    }
  }

  if (current) citations.push(current.trim());

  return citations;
}
