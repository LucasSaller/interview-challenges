export default function letrasPorNumeros(string: string): string {
  // TODO: implement
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  const normalizedString: string[] = string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "")
    .split("");
  const resultado: string = normalizedString
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(" ");
  return resultado;
}
