import Kartya from "./Kartya.js";

export default class Jatek {
  #KEPLISTA = [];
  #KIVALASZTOTTAK = [];
  constructor(KEPLISTA) {
    this.#KEPLISTA = KEPLISTA;
    this.jatekterOsszeallit();

    $(window).on("kapcsol", (event) => {
      console.log(event.detail);
      this.#KIVALASZTOTTAK.push(event.detail);
      this.#ellenoriz();
    });
  }

  #ellenoriz() {
    if (this.#KIVALASZTOTTAK.length === 2) {
      if (this.#KIVALASZTOTTAK[0] === this.#KIVALASZTOTTAK[1]) {
        this.#KIVALASZTOTTAK.pop();
        this.#KIVALASZTOTTAK.pop();
      }
    }
  }

  jatekterOsszeallit() {
    this.#KEPLISTA.forEach((elem) => {
      new Kartya(elem, $(".jatekter"));
    });
  }
}
