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

const delteItem = (event) => {
  const target = event.target.parentElement;
  
  todos = todos.filter((todo) => todo.id !== parseInt(target.id));
  saveLocalItem();

  target.remove();
}

const addItem = (todo) => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  const span = document.createElement('span');

  li.classList.add('py-1');
  li.classList.add('flex');
  
  span.innerText = todo.text;
  span.classList.add('w-5/6');
  span.classList.add('mr-1');
  span.classList.add('border-1');
  span.classList.add('border-gray-300');
  span.classList.add('py-2');
  span.classList.add('px-4');
  span.classList.add('rounded');

  button.innerText = '삭제';
  button.addEventListener('click', delteItem);
  
  button.classList.add('bg-purple-300');
  button.classList.add('hover:bg-purple-100');
  button.classList.add('border-solid');
  button.classList.add('text-white');
  button.classList.add('py-2');
  button.classList.add('px-4');
  button.classList.add('rounded');
  
  li.appendChild(span);
  li.appendChild(button);
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
  
  try {  
    const originTodos = JSON.parse(localStorage.getItem('todos'));  
     originTodos.forEach((todo) => {  
        addItem(todo);  
      });  
      todos = originTodos;  
  } catch {  
      todos = [];
      alert('오류가 발생했습니다');  
  }  
 
}

init();
form.addEventListener("submit", saveTodo);
