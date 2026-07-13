class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="cabecalho">
        <a href="/index.html">
        <img src="/assets/image/logo_miaudex.png" alt="Loco da Miaudex" />
        </a>
        <nav class="menu">
        <a href="/index.html">MiauDex</a>
        <a href="/pages/ong.html">Ajude uma ONG</a>
        <a href="/pages/contact.html">Contato</a>
        </nav>
        </header>`;
  }
}

customElements.define("site-header", SiteHeader);
