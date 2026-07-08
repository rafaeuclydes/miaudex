class SiteCard extends HTMLElement {
  connectedCallback() {
    let imagem = this.getAttribute("imagem");
    let alt = this.getAttribute("alt");
    let titulo = this.getAttribute("titulo");
    let botao = this.getAttribute("botao");
    let classImg = this.getAttribute("imgong");
    let link = this.getAttribute("linkong");
    let raca = this.getAttribute("raca");
    let acao;

    if (link) {
      acao = `<a href="${link}" target="_blank>"> <button class="saiba btn">${botao}</button></a>`;
    } else {
      acao = `<button class="saiba btn">${botao}</button>`;
    }

    this.innerHTML = `<article class="cartao" data-raca=${raca}>
            <img class="${classImg}" src="${imagem}" alt="${alt}" />
            <h3>${titulo}</h3>
            ${acao}
            <div class="info-card">
              <p class="origem"></p>
              <p class="informacoes"></p>
            </div>
          </article>`;
  }
}

customElements.define("site-card", SiteCard);
