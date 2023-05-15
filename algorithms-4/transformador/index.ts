type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: string;
  nombre: string;
  edad: string;
};

export default function transformador(input: Input): Output[] {
  // TODO: implement
  const names: string[] = input.nombres;
  const ages: number[] = input.edades;
  let resultado: Output[] = [];
  for (let [index, n] of names.entries()) {
    resultado = [
      ...resultado,
      { id: (index + 1).toString(), nombre: n, edad: ages[index].toString() },
    ];
  }
  return resultado;
}
