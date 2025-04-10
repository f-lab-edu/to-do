const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const toDo = input.value;
  if(toDo !== ''){
    const li = document.createElement('li');
    li.innerText = toDo;
    ul.appendChild(li);

    input.value = '';
  }
  
});
