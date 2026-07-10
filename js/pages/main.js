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

      if (!buscar) {
        buscar = gatosLocais[raca];
      }

      if (card.classList.contains("aberto")) {
        card.classList.remove("aberto");
        origem.innerHTML = "";
        info.innerHTML = "";
        return;
      } else {
        card.classList.add("aberto");
        origem.innerHTML = `<strong>Origem: </strong>${buscar.origin}`;
        info.innerHTML = `<strong>Informações: </strong> ${buscar.description}`;
      }
    } catch (error) {
      console.error("Gato não existe na nossa base ainda!");
    }
  });
});
