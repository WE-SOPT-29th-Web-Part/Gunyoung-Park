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

function useArticleGrid({ container, articleList }) {
  function render() {
    const children = articleList.map((dat) => {
      const component = new ArticleCard(dat);
      return component.render();
    });

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
