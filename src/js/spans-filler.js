import { inputEl, textEl, translateEl, inputEls } from "./dom-elements";
import { LangManager } from "./lang-manager";

export class SpansFiller {
  static clearInputs() {
    inputEl.innerHTML = "";
    textEl.innerHTML = "";
  }

  static fillTextEl(phraseForTyping) {
    [...phraseForTyping].forEach((letter) => {
      const spanEl = document.createElement("span");
      spanEl.textContent = letter;
      textEl.append(spanEl);
    });
  }

  static fillTranslateEl(translate) {
    translateEl.textContent = translate;
  }

  static fillSpans(phraseForTyping, translate) {
    this.clearInputs();
    this.fillTextEl(phraseForTyping);
    if (LangManager.currentLang === "ru") {
      translateEl.textContent = "";
    } else {
      this.fillTranslateEl(translate);
    }

    if (!inputEl.isContentEditable) {
      inputEl.contentEditable = "true";
    }
    inputEl.focus();
    translateEl.classList.remove("typing__translate_next");
     inputEls.style.transform = `translateX(0px)`;
  }
}
