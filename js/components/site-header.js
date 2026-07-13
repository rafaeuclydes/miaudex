class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="cabecalho">
        <a href="./index.html">
        <img src="./assets/image/logo_miaudex.png" alt="Logo da Miaudex" />
        </a>
        <nav class="menu">
        <a href="./index.html">MiauDex</a>
        <a href="./ong.html">Ajude uma ONG</a>
        <a href="./contact.html">Contato</a>
        </nav>
        </header>`;
  }
}

customElements.define("site-header", SiteHeader);
