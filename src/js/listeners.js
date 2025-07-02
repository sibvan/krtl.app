import { ThemeChanger } from "./theme-changer";
import { ShiftCatcher } from "./shift-catcher";
import { TextTyping } from "./text-typing";
import { inputEl, themeBtnEl, langBtnEl, translateEl } from "./dom-elements";
import { LangManager } from "./lang-manager";

export const addListeners = () => {
  window.addEventListener("resize", () => {
    TextTyping.setTranslateX();
  });

  document.addEventListener("keydown", (keydownEvent) => {
    if (keydownEvent.key === "Shift") {
      ShiftCatcher.shiftActive();
    }
  });

  document.addEventListener("keyup", (keydownEvent) => {
    if (keydownEvent.key === "Shift") {
      ShiftCatcher.shiftInactive();
    }
  });

  document.addEventListener("click", (clickEvent) => {
    if (
      clickEvent.target === themeBtnEl ||
      themeBtnEl.contains(clickEvent.target)
    ) {
      ThemeChanger.changeTheme();
    }

    if (
      clickEvent.target === langBtnEl ||
      langBtnEl.contains(clickEvent.target)
    ) {
      LangManager.changeLang();
    }

    if (
      (clickEvent.target === translateEl ||
        translateEl.contains(clickEvent.target)) &&
      translateEl.classList.contains("typing__translate_next")
    ) {
      TextTyping.getNewPhrase(LangManager.currentLang);
    }
  });

  inputEl.addEventListener("beforeinput", (beforeInputEvent) => {
    TextTyping.checkTyping(beforeInputEvent);
  });
};
