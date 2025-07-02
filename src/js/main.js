/* import */
import { KeyboardCreator } from "./keyboard-creator";
import { alphabets } from "./alphabets";
import { addListeners } from "./listeners";
import { SpansFiller } from "./spans-filler";
import { ThemeChanger } from "./theme-changer";
import { KeyBlinking } from "./key-blinking";
import { PhrasesManager } from "./phrases-manager";
import { LangManager } from "./lang-manager";
import { TextTyping } from "./text-typing";

/* Формирование клавиатуры в зависимости от алфавита */
new KeyboardCreator(alphabets[LangManager.currentLang]);

/* Получение фразы и добавление на страницу */
(async () => {
  await PhrasesManager.init();
  SpansFiller.fillSpans(
    PhrasesManager.phrase[LangManager.currentLang],
    PhrasesManager.phrase.ru
  );
  KeyBlinking.startBlinking(PhrasesManager.phrase[LangManager.currentLang][0]);
  TextTyping.phraseForTyping = PhrasesManager.phrase[LangManager.currentLang];

  LangManager.setLang(LangManager.currentLang);
})();

/* Добавление слушателей */
addListeners();

/* Применение темы */
ThemeChanger.init();
