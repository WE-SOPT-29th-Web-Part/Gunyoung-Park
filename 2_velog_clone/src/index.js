import { generateData } from "./api.js";

class ArticleCard {
  props = {
    img: "",
    title: "",
    content: "",
    timestamp: "",
    commentCount: 0,
    likes: 0,
    profileImg: "",
    profileName: "",
  };

  constructor(props) {
    this.props = { ...this.props, ...props };
  }

  formatTimeStamp() {
    return this.props.timestamp;
  }

  render() {
    return h("section", { className: "card" }, [
      h("img", { src: this.props.img }),
      h("article", {}, [
        h("h3", {}, [h("a", { href: "#" }, this.props.title)]),
        h("p", {}, this.props.content),
        h(
          "footer",
          {},
          `${this.formatTimeStamp()} · ${this.props.commentCount}개의 댓글`
        ),
      ]),
      h("footer", {}, [
        h("div", { className: "card-footer-author" }, [
          h("img", { src: this.props.profileImg }),
          " by ",
          h(
            "span",
            { className: "card-footer-author-text" },
            this.props.profileName
          ),
        ]),
        h("div", { className: "card-footer-like" }, [
          h("span", { className: "material-icons" }, " favorite "),
          `${this.props.likes}`,
        ]),
      ]),
    ]);
  }
}

function createDomNode(tagname, props, children = []) {
  const node = document.createElement(tagname);

  for (const prop in props) {
    node[prop] = props[prop];
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

const h = createDomNode;

function main() {
  const container = document.getElementById("article_container");

  const data = generateData(50);

  const children = data.map((dat) => {
    const component = new ArticleCard(dat);
    return component.render();
  });

  container.replaceChildren(...children);
  console.log(children);
}

window.addEventListener("load", main);
