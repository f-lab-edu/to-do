import { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  //로컬 스토리지에서 할일 목록 불러오기 - 처음 진입시 
  //[]이라서 앱이 처음시작될때 한번만 실행된다.
  useEffect(() => {
    const userTodos = JSON.parse(localStorage.getItem('todos'));
    if(userTodos){
      setTodos(userTodos);
    } 
  },[]);

  //할일 목록이 변경될 때마다 스토리지에 저장
  //[todos]작성했기때문에 todos의 배열이 변경될때마다 실행된다.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  // const addTodo = (text) => {
    
  //   if(text.trim() !== ''){
  //     const newTodo = {
  //       id : Date.now(),
  //       text : text
  //     };
  //     setTodos([...todos, newTodo]);
  //   }
  // }

  // const deleteTodo = (id) => {
  //   const filteredTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(filteredTodos);
  // }


  return (
    <div className='App'>
      <h1>To Do List</h1>
    </div>
  );
}

export default App
