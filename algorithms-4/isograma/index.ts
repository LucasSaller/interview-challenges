export default function esIsograma(string: string): boolean {
  // TODO: implement
  const normalizedString: string = string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const result: string[] = normalizedString
    .split("")
    .filter((letra, index) => index !== normalizedString.indexOf(letra));
  return result.length == 0;
}
