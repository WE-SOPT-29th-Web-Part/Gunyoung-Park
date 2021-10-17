export function setNavDropdown() {
  const nodes = document.getElementsByClassName("nav-dropdown");

  function setToggle() {
    for (const node of nodes) {
      const btns = node.getElementsByClassName("nav-dropdown-button");

      const toggle = function (state = null) {
        const dropdownContents = node.getElementsByClassName(
          "nav-dropdown-content"
        );

        for (const content of dropdownContents) {
          if (state === null) {
            content.classList.toggle("dropdown-open");
          } else if (state === true) {
            content.classList.add("dropdown-open");
          } else if (state === false) {
            content.classList.remove("dropdown-open");
          }
        }
      };

      for (const btn of btns) {
        btn.addEventListener("click", () => toggle());
      }

      node.toggleDropdown = toggle;
    }
  }

  function setSelect() {
    for (const node of nodes) {
      const containers = node.getElementsByClassName("nav-dropdown-content");

      for (const container of containers) {
        function select(idx) {
          const child = container.children[idx];
          for (const child of container.children) {
            child.classList.remove("dropdown-selected");
          }
          child.classList.add("dropdown-selected");

          const displays = node.getElementsByClassName("dropdown-display");
          for (const display of displays) {
            display.textContent = child.textContent;
          }
        }

        let cnt = 0;
        for (const child of container.children) {
          const thisIdx = cnt;
          child.addEventListener("click", () => {
            node.toggleDropdown(false);

            select(thisIdx);
          });
          cnt++;
        }

        select(0);
      }
    }
  }

  setToggle();
  setSelect();
}
