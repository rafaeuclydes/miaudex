class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="cabecalho">
        <a href="#">
        <img src="../assets/image/logo_miaudex.png" alt="Loco da Miaudex" />
        </a>
        <nav class="menu">
        <a href="">MiauDex</a>
        <a href="">Ajude uma ONG</a>
        <a href="">Contato</a>
        </nav>
        </header>`;
  }
}

customElements.define("site-header", SiteHeader);
