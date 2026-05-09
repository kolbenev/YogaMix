const headerElement = document.querySelector(".header");
const menuToggleButton = document.querySelector(".header__menu-toggle");
const menuCloseButton = document.querySelector(".header__menu-close");
const menuOverlay = document.querySelector(".header__overlay");
const menuLinks = document.querySelectorAll("[data-menu-link]");
const mobileBreakpoint = window.matchMedia("(max-width: 767px)");

if (
  headerElement &&
  menuToggleButton &&
  menuCloseButton &&
  menuOverlay &&
  menuLinks.length
) {
  const setMenuState = (isOpen, shouldReturnFocus = false) => {
    headerElement.classList.toggle("header--menu-open", isOpen);
    document.body.classList.toggle("body--menu-open", isOpen);
    menuToggleButton.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
      menuCloseButton.focus();
      return;
    }

    if (shouldReturnFocus) {
      menuToggleButton.focus();
    }
  };

  const closeMenu = (shouldReturnFocus = false) => {
    setMenuState(false, shouldReturnFocus);
  };

  const openMenu = () => {
    if (!mobileBreakpoint.matches) {
      return;
    }

    setMenuState(true);
  };

  menuToggleButton.addEventListener("click", () => {
    const isMenuOpen = headerElement.classList.contains("header--menu-open");

    if (isMenuOpen) {
      closeMenu(true);
      return;
    }

    openMenu();
  });

  menuCloseButton.addEventListener("click", () => {
    closeMenu(true);
  });

  menuOverlay.addEventListener("click", () => {
    closeMenu(true);
  });

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", (mouseEvent) => {
      if (menuLink.getAttribute("href") === "#!") {
        mouseEvent.preventDefault();
      }

      closeMenu(false);
    });
  });

  document.addEventListener("keydown", (keyboardEvent) => {
    const isMenuOpen = headerElement.classList.contains("header--menu-open");

    if (keyboardEvent.key === "Escape" && isMenuOpen) {
      closeMenu(true);
    }
  });

  const handleBreakpointChange = (mediaQueryEvent) => {
    if (!mediaQueryEvent.matches) {
      closeMenu(false);
    }
  };

  if (typeof mobileBreakpoint.addEventListener === "function") {
    mobileBreakpoint.addEventListener("change", handleBreakpointChange);
  } else {
    mobileBreakpoint.addListener(handleBreakpointChange);
  }
}
