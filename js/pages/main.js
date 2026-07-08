import { infoCats } from "../services/infocats.js";
import { gatosLocais } from "../services/gatosLocais.js";
let saibaMais = document.querySelectorAll(".saiba");

saibaMais.forEach((botao) => {
  botao.addEventListener("click", async () => {
    try {
      let card = botao.closest(".cartao");
      let origem = card.querySelector(".origem");
      let info = card.querySelector(".informacoes");
      let raca = card.dataset.raca;
      let buscar = await infoCats(raca);

      console.log("Raça:", raca);
      console.log("Buscar:", buscar);

      if (!buscar) {
        buscar = gatosLocais[raca];
      }

      origem.innerHTML = `<strong>Origem: </strong>${buscar.origin}`;
      info.innerHTML = `<strong>Informações: </strong> ${buscar.description}`;
    } catch (error) {
      console.error("deu ruim");
    }
  });
});
