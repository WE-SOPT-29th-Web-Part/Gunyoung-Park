function createDomNode(tagname, props, children = []) {
  const node = document.createElement(tagname);

  for (const prop in props) {
    if (prop.startsWith("on")) {
      node.addEventListener(prop.substring(2), props[prop]);
    } else {
      node[prop] = props[prop];
    }
  }

  if (!Array.isArray(children)) {
    children = [children];
  }

  children.forEach((child) => {
    if (typeof child === "string") {
      node.appendChild(document.createTextNode(child));
    } else {
      node.appendChild(child);
    }
  });

  return node;
}

export const h = createDomNode;
