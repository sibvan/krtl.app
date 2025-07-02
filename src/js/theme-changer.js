import { themeIconEl } from "./dom-elements";

export class ThemeChanger {
  static init() {
    this.applyTheme(this.getCurrentTheme());
  }

  static changeTheme() {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === "light" ? "dark" : "light";
    this.applyTheme(newTheme);
    this.rememberTheme(newTheme);
  }

  static applyTheme(newTheme) {
    if (newTheme === "light") {
      document.documentElement.style.colorScheme = "light";
    } else if (newTheme === "dark") {
      document.documentElement.style.colorScheme = "dark";
    }
    themeIconEl.setAttribute("src", `src/icons/${newTheme}_mode.svg`);
  }

  static rememberTheme(newTheme) {
    localStorage.setItem("theme", newTheme);
  }

  static getCurrentTheme() {
    return (
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  }
}
