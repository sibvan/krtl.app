const inputEl = document.querySelector("[data-js-input]");
const textEl = document.querySelector("[data-js-text]");
const translateEl = document.querySelector("[data-js-translate]");
const spaceBtn = document.querySelector("[data-js-space]");
const enterBtn = document.querySelector("[data-js-enter]");
const getAllLetters = () => [...document.querySelectorAll("[data-js-letter]")];
const shiftBtns = document.querySelectorAll("[data-js-shift]");
const themeBtnEl = document.querySelector("[data-js-theme-btn]");
const themeIconEl = document.querySelector("[data-js-theme-icon]");
const inputEls = document.querySelector("[data-js-inputs]");
const langBtnEl = document.querySelector("[data-js-lang-btn]");


export {
  themeBtnEl,
  inputEl,
  textEl,
  translateEl,
  spaceBtn,
  enterBtn,
  getAllLetters,
  shiftBtns,
  themeIconEl,
  inputEls,
  langBtnEl,
};
