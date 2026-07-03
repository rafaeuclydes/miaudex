class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    <footer class="rodape">
      <p>Desenvolvido por Rafael Euclydes</p>
      <div class="icones">
        <a
          href="https://www.linkedin.com/in/rafael-euclydes-299212254"
          target="_blank"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
        <a href="https://github.com/rafaeuclydes" target="_blank"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a href="https://www.instagram.com/rafa_euclydes/" target="_blank"
          ><i class="fa-brands fa-instagram"></i
        ></a>
      </div>
    </footer>`;
  }
}

customElements.define("site-footer", SiteFooter);
