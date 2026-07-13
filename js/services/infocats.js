export async function infoCats(cat) {
  let resposta = await fetch("https://api.thecatapi.com/v1/breeds");
  let dados = await resposta.json();

  let gato = dados.find((gato) => gato.name === cat);

  return gato;
}
