export function changeTheme() {
  const bodyElement = document.querySelector("body") as HTMLBodyElement;

  if (bodyElement.hasAttribute("data-theme")) {
    bodyElement.removeAttribute("data-theme");
    localStorage.removeItem("__THEME__");
  } else {
    bodyElement.setAttribute("data-theme", "dark");
    localStorage.setItem("__THEME__", "dark");
  }
}

export function handleTheme(): "dark" | "light" {
  const bodyElement = document.querySelector("body") as HTMLBodyElement;

  const storageTheme = localStorage.getItem("__THEME__");

  if (!storageTheme || storageTheme === "light") {
    bodyElement.removeAttribute("data-theme");

    return "light";
  }

  bodyElement.setAttribute("data-theme", "dark");

  return "dark";
}
