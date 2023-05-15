export default function filtrarPares(array: any[]): any[] {
  let result: any[] = [];
  array.forEach((element) => {
    if (
      countOccurrences(array, element) % 2 == 0 &&
      !result.includes(element)
    ) {
      result.push(element);
    }
  });
  return result;
}
function countOccurrences(array: any[], value: any) {
  return array.filter((element) => {
    return element === value;
  }).length;
}
