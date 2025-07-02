import { KeyboardCreator } from "./keyboard-creator";
import { alphabets } from "./alphabets";
import { TextTyping } from "./text-typing";
import { langBtnEl } from "./dom-elements";

export class LangManager {
  static langs = Object.keys(alphabets);
  static currentLang = localStorage.getItem("lang") || "ka";

  static setLang(lang) {
    new KeyboardCreator(alphabets[lang]);
    langBtnEl.textContent = lang[0].toUpperCase() + lang[1];
    TextTyping.getNewPhrase(lang);
  }

  static changeLang() {
    const currentIndex = this.langs.findIndex(
      (arrEl) => arrEl === this.currentLang
    );
    const nextIndex =
      currentIndex + 1 < this.langs.length ? currentIndex + 1 : 0;
    this.currentLang = this.langs[nextIndex];

    this.setLang(this.currentLang);
    this.saveLang(this.currentLang);
  }

  static saveLang(newLang) {
    localStorage.setItem("lang", newLang);
  }
}
