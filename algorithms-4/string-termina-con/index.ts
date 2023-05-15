export default function stringTerminaCon(
  string: string,
  final: string
): boolean {
  // TODO: implement

  return string.split("").slice(-final.length).join("") == final;
}
