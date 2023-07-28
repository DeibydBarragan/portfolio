export const numberToStringArray = (number: number): string[] => {
  const array: string[] = [];
  for (let i = 1; i < number; i++) {
    array.push(i.toString());
  }
  return array;
}