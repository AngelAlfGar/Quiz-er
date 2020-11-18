class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; 2020 <a href="https://www.facebook.com/LAngelAlGa/">Luis Angel Alfaro Garcia.</a>
        Todos los derechos reservados.`;
  }
}
customElements.define("mi-footer", MiFooter);