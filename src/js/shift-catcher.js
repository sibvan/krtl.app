export class ShiftCatcher {
  static topLetters = null;
  static btmLetters = null;

  static shiftActive() {
    if (this.topLetters && this.topLetters) {
      this.topLetters.forEach((letter) => {
        letter.style.opacity = 1;
      });

      this.btmLetters.forEach((letter) => {
        letter.style.opacity = 0.2;
      });
    }
  }

  static shiftInactive() {
    if (this.topLetters && this.topLetters) {
      this.topLetters.forEach((letter) => {
        letter.style.opacity = 0.2;
      });
      this.btmLetters.forEach((letter) => {
        letter.style.opacity = 1;
      });
    }
  }
}
