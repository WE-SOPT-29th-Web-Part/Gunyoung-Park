export function setNavDropdown() {
  const nodes = document.getElementsByClassName("nav-dropdown");

  for (const node of nodes) {
    const btns = node.getElementsByClassName("nav-dropdown-button");

    const toggle = (function () {
      let isOpen = false;

      return function (e) {
        isOpen = !isOpen;

        const dropdownContents = node.getElementsByClassName(
          "nav-dropdown-content"
        );

        for (const content of dropdownContents) {
          if (isOpen) {
            content.classList.add("dropdown-open");
          } else {
            content.classList.remove("dropdown-open");
          }
        }
      };
    })();

    for (const btn of btns) {
      btn.addEventListener("click", toggle);
    }
  }
}
