/**
 *
 * @param {Record<string, HTMLElement>} els
 * @returns
 */
function useViewState({
  leftPanel,
  rightPanel,
  todayButton,
  tomorrowButton,
  bothButton,
}) {
  const runState = bothState;

  function todayState() {
    leftPanel.classList.remove("hidden");
    rightPanel.classList.add("hidden");
  }

  function tomorrowState() {
    leftPanel.classList.add("hidden");
    rightPanel.classList.remove("hidden");
  }

  function bothState() {
    leftPanel.classList.remove("hidden");
    rightPanel.classList.remove("hidden");
  }

  runState();

  todayButton.addEventListener("click", () => todayState());
  tomorrowButton.addEventListener("click", () => tomorrowState());
  bothButton.addEventListener("click", () => bothState());

  return {};
}

/**
 *
 * @param {Record<string, HTMLElement>} els
 */
function useTodoListState({ container }, itemFactory) {
  const todoList = [];

  function add(content) {
    todoList.push({ content });
    render();
  }

  function remove(index) {
    todoList.splice(index, 1);
    render();
  }

  function render() {
    const nodes = todoList.map((todo, idx) =>
      itemFactory(todo.content, () => remove(idx))
    );

    container.replaceChildren(...nodes);
  }

  render();

  return { add, remove };
}

/**
 *
 * @param {Record<string, HTMLElement>} els
 */
function useTodoListControl({ input, submit }, onAdd) {
  function onSubmit() {
    onAdd(input.value);
    input.value = "";
    input.focus();
  }

  submit.addEventListener("click", onSubmit);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  });
}

/**
 *
 * @param {Record<string, HTMLElement>} els
 */
function useTodoList({ container, input, submit }, itemFactory) {
  const state = useTodoListState({ container }, itemFactory);

  useTodoListControl({ input, submit }, (value) => {
    state.add(value);
  });
}

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function h(tag, props, child) {
  const node = document.createElement(tag);
  for (const prop in props) {
    node[prop] = props[prop];
  }

  if (!Array.isArray(child)) {
    child = [child];
  }
  child.forEach((item) => {
    if (typeof item === "string") {
      node.appendChild(document.createTextNode(item));
    } else {
      node.appendChild(item);
    }
  });
  return node;
}

function createTodoNode(content, onDeleteClick) {
  const deleteBtn = h(
    "button",
    {},
    h("span", { className: "material-icons" }, String.fromCodePoint(0xe872))
  );

  deleteBtn.addEventListener("click", onDeleteClick);

  return h("li", { className: "todos__item" }, [content, deleteBtn]);
}

function main() {
  useViewState({
    leftPanel: $("#today_panel"),
    rightPanel: $("#tomorrow_panel"),
    todayButton: $("#today_button"),
    tomorrowButton: $("#tomorrow_button"),
    bothButton: $("#both_button"),
  });

  useTodoList(
    {
      container: $("#today_panel .todos__list"),
      input: $("#today_panel .todos__textfield"),
      submit: $("#today_panel .todos__commit"),
    },
    createTodoNode
  );

  useTodoList(
    {
      container: $("#tomorrow_panel .todos__list"),
      input: $("#tomorrow_panel .todos__textfield"),
      submit: $("#tomorrow_panel .todos__commit"),
    },
    createTodoNode
  );
}

window.addEventListener("load", main);
