/**
 *
 * @param {HTMLElement} root
 */
export function useImageSlider(root) {
  const leftBtn = root.querySelector(".image-slider-button");
  const rightBtn = root.querySelector(".image-slider-button.right");
  const container = root.querySelector(".image-slider-container");

  const maxCount = container.children.length;

  let scrollWidth = null;
  let scrollIndex = 0;

  function calcScrollWidth() {
    const item1 = container.querySelector("*");
    const item2 = item1.nextSibling;

    scrollWidth =
      item2.getBoundingClientRect().left - item1.getBoundingClientRect().left;
    console.log(scrollWidth);
  }

  function getStartOffset() {
    return scrollWidth * scrollIndex;
  }

  function move() {
    if (scrollWidth === null) {
      calcScrollWidth();
    }
    container.style.transform = `translateX(-${getStartOffset()}px)`;
  }

  function goLeft() {
    if (scrollIndex > 0) {
      scrollIndex--;
    }
    move();
  }

  function goRight() {
    if (scrollIndex < maxCount - 3) {
      scrollIndex++;
    }
    move();
  }

  let marked = false;

  function shouldMove() {
    if (!marked) {
      requestAnimationFrame(() => {
        calcScrollWidth();
        move();
        marked = false;
      });
      marked = true;
    }
  }

  leftBtn.addEventListener("click", () => goLeft());
  rightBtn.addEventListener("click", () => goRight());
  window.addEventListener("resize", () => {
    shouldMove();
  });
}
