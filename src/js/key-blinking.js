import { spaceBtn, enterBtn, getAllLetters, shiftBtns } from "./dom-elements";

export class KeyBlinking {
  static stopBlinking() {
    const blinkingBtns = document.querySelectorAll(".keyboard__key_blinking");
    blinkingBtns.forEach((btn) =>
      btn.classList.remove("keyboard__key_blinking")
    );
  }

  static startBlinking(letter) {
    this.stopBlinking();
    let targetLetter = null;
    let isShiftLetter = false;
    let blinkingBtn = null;

    if (letter === "\u00A0") {
      blinkingBtn = spaceBtn;
    } else if (letter === "Enter") {
      blinkingBtn = enterBtn;
    } else {
      targetLetter = getAllLetters().find((p) => p.textContent.toLowerCase() === letter.toLowerCase());
      blinkingBtn = targetLetter?.closest(".keyboard__key") || null;
      isShiftLetter = targetLetter?.hasAttribute("data-js-letter-20");
    }

    if (isShiftLetter) {
      shiftBtns.forEach((shift) => {
        shift.classList.add("keyboard__key_blinking");
      });
    }
    if (blinkingBtn) {
      blinkingBtn.classList.add("keyboard__key_blinking");
    }
  }
}
