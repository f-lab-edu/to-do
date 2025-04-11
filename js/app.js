const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/**
 * 1. 삭제버튼 추가
 * 2. 저장
 * 3. 삭제버튼 기능구현
 */

let todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

const delItem = (event) => {
  const target = event.target.parentElement;
  
  todos = todos.filter((todo) => todo.id !== parseInt(target.id));
  save();

  target.remove();
}

const addItem = (todo) => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  const span = document.createElement('span');
  
  span.innerText = todo.text;
  button.innerText = '삭제';
  button.addEventListener('click', delItem);
  
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
  li.id = todo.id;
}

const handler = (event) => {
  event.preventDefault();
  
  const todo = {
    id : Date.now(),
    text : input.value
  }

  todos.push(todo)
  
  if(todo.text !== ''){
    addItem(todo);
    save();
  }
  input.value = '';
}

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem('todos'));
  
  if(userTodos){
    userTodos.array.forEach((todo) => {
      addItem(todo);
    });  
  }
  
  todos = userTodos;
}

init();
form.addEventListener("submit", handler);
