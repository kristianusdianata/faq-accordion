const accordionItems = document.querySelectorAll(".accordion__item");
const openedAccordion = document.querySelector(".accordion__item[open]");

function onToggleHandler(e) {
  e.preventDefault();

  const currentTarget = e.target;
  const currentIcon = currentTarget.querySelector(
    ".accordion__item-header .icon img"
  );

  if (currentTarget.open) {
    // Get all opened <details>
    const allOpen = document.querySelectorAll(".accordion__item[open]");

    // if opened <details> more than 1, close all  <details> except current <details>
    if (Array.from(allOpen).length > 1) {
      allOpen.forEach((openItem) => {
        if (openItem !== e.target) {
          openItem.removeAttribute("open");
          const icon = openItem.querySelector(
            ".accordion__item-header .icon img"
          );
          icon.src = "./assets/images/icon-plus.svg";
        }
      });
    }

    currentIcon.src = "./assets/images/icon-minus.svg";
  } else {
    currentIcon.src = "./assets/images/icon-plus.svg";
  }
}

for (const [_index, accordion] of Array.from(accordionItems).entries()) {
  accordion.addEventListener("toggle", onToggleHandler);
}
