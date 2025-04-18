const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/**
 * 1. 삭제버튼 추가
 * 2. 저장
 * 3. 삭제버튼 기능구현
 */

let todos = [];

const saveLocalItem = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}


const addItem = (todo) => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  const span = document.createElement('span');
  
  span.innerText = todo.text;
  
  li.appendChild(span);
  ul.appendChild(li);
  li.id = todo.id;
}

const saveTodo = (event) => {
  event.preventDefault();
  
  const todo = {
    id : Date.now(),
    text : input.value
  }

  todos.push(todo)
  
  if(todo.text !== ''){
    addItem(todo);
    saveLocalItem();
  }
  input.value = '';
}

const init = () => {
  const originTodos = JSON.parse(localStorage.getItem('todos'));
  
  if(originTodos){
    originTodos.forEach((todo) => {
      addItem(todo);
    });  
  }

  todos = originTodos;
}

init();
form.addEventListener("submit", saveTodo);