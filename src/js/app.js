import '/src/css/styles.css';
import 'vite/dynamic-import-polyfill'
import * as Ladda from 'ladda';

class App {
  constructor() {
    // Set Variables

    // Functions
    this.onModalClick = this.modalClick.bind(this);

    this.init();
  }

  init() {
    this.cookieBanner();
    this.imports();
    this.addEvents();
  }

  imports() {
    import(/* webpackChunkName: "chilli-log-component" */ './components/chilli-log').then(({ default: Module }) => new Module());
    import(/* webpackChunkName: "nav" */ './components/nav-popup').then(({ default: Module }) => new Module());
    if (document.querySelector('.js-validate')) import(/* webpackChunkName: "validation-component" */ './components/validation').then(({ default: Module }) => new Module());
    if (document.querySelector('.fade-in')) import(/* webpackChunkName: "fader-component" */ './components/fader').then(({ default: Module }) => new Module());
    if (document.querySelector('.js-modal')) this.modalModule = import(/* webpackChunkName: "modal" */ './components/modal');
    import(/* webpackChunkName: "commerce-component" */ './components/commerce').then(({ default: Module }) => new Module());
  }

  addEvents() {
    const modalButton = document.querySelectorAll('.js-modal');
    modalButton.forEach(el => el.addEventListener('click', this.onModalClick));
  }

  modalClick(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const { url } = button.dataset;
    const loader = Ladda.create(button);
    loader.start();

    this.modalModule.then(({ default: Module }) => new Module({ url }));
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new App();
});
