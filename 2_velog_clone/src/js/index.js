import { generateData } from "./api.js";
import { h } from "./dom.js";
import { setNavDropdown } from "./dropdown.js";

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
    onClickCard: () => {},
  };

  constructor(props) {
    this.props = { ...this.props, ...props };
  }

  formatTimeStamp() {
    return this.props.timestamp;
  }

  render() {
    return h(
      "section",
      {
        className: "card clickable",
        onclick: () => this.props.onClickCard(),
      },
      [
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
      ]
    );
  }
}

function useModal() {
  const el = h("div", { className: "modal", onclick: close });

  function show(article) {
    const articleNode = new ArticleCard({ ...article });

    const content = h("div", { className: "modal-content" }, [
      articleNode.render(),
      h("button", { className: "modal-close-button" }, "X"),
    ]);
    el.replaceChildren(content);

    el.classList.add("modal-show");

    document.body.style.overflowY = "hidden";
  }

  function close() {
    el.classList.remove("modal-show");

    document.body.style.overflowY = "auto";
  }

  return {
    el,
    show,
    close,
  };
}

function useArticleGrid({ container, articleList }) {
  function render() {
    const modal = useModal();

    const children = articleList.map((dat) => {
      const component = new ArticleCard({
        ...dat,
        onClickCard: () => modal.show({ ...dat }),
      });
      return component.render();
    });

    children.push(modal.el);

    container.replaceChildren(...children);
  }

  render();
}

function main() {
  const articleList = generateData(50);
  useArticleGrid({
    container: document.getElementById("article_container"),
    articleList,
  });
  setNavDropdown();
}

window.addEventListener("load", main);
