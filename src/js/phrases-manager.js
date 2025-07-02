import { LangManager } from "./lang-manager";

export class PhrasesManager {
  static phrase;
  static phraseList;

  static async init() {
    await this.getPhraseList();
    this.getRandomPhrase(LangManager.currentLang);
  }

  static async getPhraseList() {
    const response = await fetch("phrases.json");
    this.phraseList = await response.json();
  }

  static getRandomPhrase(lang) {
    const randomId = Math.floor(Math.random() * this.phraseList.length);
    this.phrase = this.phraseList[randomId];
    this.phrase[lang] = this.phrase[lang].replaceAll(" ", " ");
  }
}
