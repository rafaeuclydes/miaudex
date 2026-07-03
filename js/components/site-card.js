class SiteCard extends HTMLElement {
  connectedCallback() {
    let imagem = this.getAttribute("imagem");
    let alt = this.getAttribute("alt");
    let titulo = this.getAttribute("titulo");
    let botao = this.getAttribute("botao");
    let informacao = this.getAttribute("informacao");
    let classImg = this.getAttribute("imgong");
    let link = this.getAttribute("linkong");

    this.innerHTML = `<article class="cartao">
            <img class="${classImg}" src="${imagem}" alt="${alt}" />
            <h3>${titulo}</h3>
            <a href="${link}">
               <button class="btn">${botao}</button>
            </a>
            <div id="informacoes"></div>
          </article>`;
  }
}

customElements.define("site-card", SiteCard);
