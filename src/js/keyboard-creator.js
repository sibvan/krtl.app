import { ShiftCatcher } from "./shift-catcher";
import { alphabets } from "./alphabets";

export class KeyboardCreator {

  

  constructor(alphabet) {
    this.letterBtnsRows = [...document.querySelectorAll("[data-js-row]")].map(
      (row) => [...row.querySelectorAll("[data-js-letter-btn]")]
    );

    this.alphabetKeys = Object.values(alphabet).map(Object.keys);
    this.alphabetValues = Object.values(alphabet).map(Object.values);
    this.createBtns();

    if (alphabet === alphabets.ka) {
      ShiftCatcher.topLetters = document.querySelectorAll(
        ".keyboard__letter:nth-child(3)"
      );
      ShiftCatcher.btmLetters = document.querySelectorAll(
        ".keyboard__letter:nth-child(2)"
      );
    }

    if (alphabet === alphabets.en) {
      document.querySelectorAll("[data-js-letter]").forEach((letter) => {
        letter.style.opacity = 1;
      });
    }
  }

  clearBtns() {
    this.letterBtnsRows.forEach((row) =>
      row.forEach((btn) => (btn.innerHTML = ""))
    );
  }

  createEl({ element, elementClass, textContent, attributes } = {}) {
    if (!element) {
      return;
    }
    const el = document.createElement(element);

    if (elementClass) {
      el.classList.add(elementClass);
    }

    if (textContent) {
      el.textContent = textContent;
    }
    if (attributes) {
      attributes.forEach(([name, value]) => {
        el.setAttribute(name, value);
      });
    }

    return el;
  }

  insertLetters(letters) {
    for (let i = 0; i < this.letterBtnsRows.length; i++) {
      const row = this.letterBtnsRows[i];
      for (let j = 0; j < row.length; j++) {
        [...letters[i][j]].forEach((letter) => {
          const pEl = this.createEl({
            element: "p",
            elementClass: "keyboard__letter",
            textContent: letter,
            attributes: [["data-js-letter", ""]],
          });

          this.letterBtnsRows[i][j].append(pEl);
        });
      }
    }
  }

  createBtns() {
    this.clearBtns();
    this.insertLetters(this.alphabetKeys);
    if (this.alphabetValues) {
      this.insertLetters(this.alphabetValues);
    }
  }
}
