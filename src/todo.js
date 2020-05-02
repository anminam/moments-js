import { save, load } from "./localStorage";

const elForm = document.getElementById("action-add-todo");
const elPending = document.getElementById("pending-list");
const elFinished = document.getElementById("finished-list");
const elInputTodo = document.getElementById("input-todo");

let todoList = [];
let finishedList = [];

const KEY_PENDDING = "PENDDING";
const KEY_FINISHED = "FINISHED";

export const init = () => {
  // get localstorage
  todoList = loadList(KEY_PENDDING) || [];
  finishedList = loadList(KEY_FINISHED) || [];

  // update
  updatePending();
  updateFinsihed();

  // elform add Event
  elForm.addEventListener("submit", e => {
    e.preventDefault();
    const todoStr = elInputTodo.value;

    elInputTodo.value = "";
    addTodo(todoStr);
    updatePending();
  });

  elPending.addEventListener("click", onClickBtnEvent);
  elFinished.addEventListener("click", onClickBtnEvent);
};

const addTodo = todo => {
  const obj = {
    id: new Date().getTime(),
    text: todo
  };
  todoList.push(obj);
  saveList(KEY_PENDDING, todoList);
};

const onClickBtnEvent = e => {
  if (e.target.tagName !== "BUTTON") {
    return;
  }
  const id = Number(e.target.getAttribute("data-id"));
  const method = e.target.getAttribute("data-method");

  let index = -1;
  todoList.forEach((item, i) => {
    if (item.id === id) {
      index = i;
    }
  });

  switch (method) {
    case "delete":
      todoList.splice(index, 1);
      break;
    case "delete_at_finish":
      finishedList.splice(index, 1);
      break;
    case "finish":
      const todoItem = todoList.splice(index, 1);
      finishedList.push(todoItem[0]);
      break;
    case "return":
      const returnItem = finishedList.splice(index, 1);
      todoList.push(returnItem[0]);
      break;
    default:
      console.log(`what is ${method}???`);
      break;
  }
  saveList(KEY_PENDDING, todoList);
  saveList(KEY_FINISHED, finishedList);

  updatePending();
  updateFinsihed();
};

const updatePending = () => {
  let el = "";
  todoList.forEach((item, i) => {
    el += `<li>
      ${item.text}
      <button type="button" class="delete" data-method="delete" data-id=${
        item.id
      }>🗑</button>
      <button type="button" class="finish" data-method="finish" data-id=${
        item.id
      }>👌</button>
    </li>`;
  });
  elPending.innerHTML = el;
};

const updateFinsihed = () => {
  let el = "";
  finishedList.forEach((item, i) => {
    el += `<li>
      ${item.text}
      <button type="button" class="delete_at_finish" data-method="delete_at_finish" data-id=${
        item.id
      }>🗑</button>
      <button type="button" class="return" data-method="return" data-id=${
        item.id
      }>📄</button>
    </li>`;
  });
  elFinished.innerHTML = el;
};

const saveList = (key, list) => {
  save(key, JSON.stringify(list));
};

const loadList = key => {
  return JSON.parse(load(key));
};

// https://codesandbox.io/s/empty-blueprint-rrk2g


// const updateList = (container, list, key) => {
//   let el = "";
//   let methods = {
//     btnDelete: 'delete',
//     btnFinished: 'finish',
//     btnFinishedIcon: 'ok'
//   }
//   if (key === KEY_FINISHED ) {
//     methods = {
//       btnDelete: 'delete_at_finish',
//       btnFinished: 'return',
//       btnFinishedIcon: 'doc'
//     }
//   }

//   list.forEach((item, i) => {
//     el += `<li>
//       ${item.text}
//       <button type="button" class="${methods.btnDelete}" data-method="${methods.btnDelete}" data-id=${
//         item.id
//       }>🗑</button>
//       <button type="button" class="${methods.btnFinished}" data-method="${methods.btnFinished}" data-id=${
//         item.id
//       }>${item.btnFinishedIcon == "ok" ? '': ''}</button>
//     </li>`;
//   });
//   container.innerHTML = el;
// }