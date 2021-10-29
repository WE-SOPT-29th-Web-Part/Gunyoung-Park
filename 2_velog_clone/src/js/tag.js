export function setupTagBoxes() {
  const tagBoxes = document.getElementsByClassName("tagbox");
  Array.prototype.forEach.call(tagBoxes, (box) => makeTagBox(box));
}

function makeTagBox($tagBox) {
  const $inputBox = h("input", { type: "text", className: "tagbox-input" });
  $tagBox.appendChild($inputBox);

  function appendTagboxItem(inputText) {
    const $btn = h("button", { className: "tagbox-item" }, inputText);

    $btn.addEventListener("click", () => {
      $btn.remove();
      $inputBox.focus();
    });

    $tagBox.insertBefore($btn, $inputBox);
  }

  $inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const inputText = $inputBox.value;
      if (inputText !== "") {
        $inputBox.value = "";

        appendTagboxItem(inputText);
      }
    } else if (e.key === "Backspace") {
      const tags = $tagBox.querySelectorAll(".tagbox-item");
      if (tags.length > 0) {
        tags[tags.length - 1].remove();
      }
    }
  });
}

function h(tagname, props, children = []) {
  const node = document.createElement(tagname);

  for (const prop in props) {
    node[prop] = props[prop];
  }

  for (const child of children) {
    let childNode;
    if (typeof child === "string") {
      childNode = document.createTextNode(child);
    } else {
      childNode = child;
    }

    node.appendChild(childNode);
  }

  return node;
}
