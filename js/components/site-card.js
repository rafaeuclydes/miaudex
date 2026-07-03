class SiteCard extends HTMLElement {
  connectedCallback() {
    let imagem = this.getAttribute("imagem");
    let alt = this.getAttribute("alt");
    let titulo = this.getAttribute("titulo");
    let botao = this.getAttribute("botao");
    let informacao = this.getAttribute("informacao");

    this.innerHTML = `<article class="cartao">
            <img src="${imagem}" alt="${alt}" />
            <h3>${titulo}</h3>
            <button class="btn">${botao}</button>
            <div id="informacoes"></div>
          </article>`;
  }
}

customElements.define("site-card", SiteCard);
