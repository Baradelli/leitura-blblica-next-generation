export function changeTheme() {
  const bodyElement = document.querySelector("body") as HTMLBodyElement;

  if (bodyElement.hasAttribute("data-theme")) {
    bodyElement.removeAttribute("data-theme");
  } else {
    bodyElement.setAttribute("data-theme", "dark");
  }
}

export function handleTheme(): "dark" | "light" {
  const bodyElement = document.querySelector("body") as HTMLBodyElement;

  if (bodyElement.hasAttribute("data-theme")) return "dark";

  return "light";
}
