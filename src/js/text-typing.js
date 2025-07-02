import { inputEl, inputEls, translateEl } from "./dom-elements";
import { KeyBlinking } from "./key-blinking";
import { PhrasesManager } from "./phrases-manager";
import { SpansFiller } from "./spans-filler";
import { LangManager } from "./lang-manager";

export class TextTyping {
  static phraseForTyping;
  static checkTyping(beforeInputEvent) {
    beforeInputEvent.preventDefault();

    if (beforeInputEvent.inputType === "deleteContentBackward") {
      if (inputEl.lastElementChild) {
        inputEl.lastElementChild.remove();
      }
    } else if (beforeInputEvent.inputType === "insertParagraph") {
      this.getNewPhrase(LangManager.currentLang);
    } else if (inputEl.textContent.length < this.phraseForTyping.length) {
      this.insertLetter(beforeInputEvent.data);
    }

    this.setEndOfContenteditable();
    this.blinkNextLetter();
  }

  static blinkNextLetter() {
    let nextLetter;
    if (inputEl.textContent.length < this.phraseForTyping.length) {
      nextLetter = this.getNextLetter();
    } else {
      nextLetter = "Enter";
      translateEl.textContent = "Enter — следующая фраза";
      translateEl.classList.add("typing__translate_next");
    }

    KeyBlinking.startBlinking(nextLetter);
    this.setTranslateX();
  }

  static insertLetter(typedLetter) {
    const inputLetterEl = document.createElement("span");
    const phraseLetter = this.getNextLetter();
    inputLetterEl.textContent = phraseLetter;

    if (typedLetter !== phraseLetter) {
      inputLetterEl.classList.add("typing__input_red");
    }

    inputEl.append(inputLetterEl);
  }

  static getNewPhrase(lang) {
    PhrasesManager.getRandomPhrase(lang);
    SpansFiller.fillSpans(
      PhrasesManager.phrase[`${lang}`],
      PhrasesManager.phrase.ru
    );
    KeyBlinking.startBlinking(PhrasesManager.phrase[`${lang}`][0]);
    this.phraseForTyping = PhrasesManager.phrase[lang];
  }

  static getNextLetter() {
    return this.phraseForTyping.slice(
      inputEl.textContent.length,
      inputEl.textContent.length + 1
    );
  }

  static setTranslateX() {
    const winWidth = window.innerWidth;
    const inputWidth = inputEl.offsetWidth;
    const paddings = 24;
    const difference = winWidth - inputWidth - paddings;
    if (difference > 0) {
      inputEls.style.transform = `translateX(0px)`;
    } else {
      const step = difference / this.phraseForTyping.length;
      inputEls.style.transform = `translateX(
        ${step * inputEl.textContent.length}px)`;
    }
  }

  static setEndOfContenteditable() {
    // https://stackoverflow.com/questions/36284973/set-cursor-at-the-end-of-content-editable
    let range, selection;
    if (document.createRange) {
      range = document.createRange();
      range.selectNodeContents(inputEl);
      range.collapse(false);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    } else if (document.selection) {
      range = document.body.createTextRange();
      range.moveToElementText(inputEl);
      range.collapse(false);
      range.select();
    }
  }
}
