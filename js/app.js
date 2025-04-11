const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/**
 * 1. 삭제버튼 추가
 * 2. 저장
 * 3. 삭제버튼 기능구현
 */

const delItem = (event) => {
  const target = event.target.parentElement;
  target.remove();
}

const addItem = (text) => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  const span = document.createElement('span');
  
  span.innerText = text;
  button.innerText = '삭제';
  button.addEventListener('click', delItem);
  
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
}

const handler = (event) => {
  event.preventDefault();
  
  const toDo = input.value;
  if(toDo !== ''){
    addItem(toDo);
  }
  input.value = '';
}

form.addEventListener("submit", handler);
