import { useState , useEffect} from 'react'
import './App.css'
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const userTodos = JSON.parse(localStorage.getItem('todos'));
    if(userTodos){
      setTodos(userTodos);
    } 
  },[]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const addTodo = (text) => {
    
    if(text.trim() !== ''){
      const newTodo = {
        id : Date.now(),
        text : text
      };
      setTodos([...todos, newTodo]);
    }
  }

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }


  return (
    <div className=''>
      <h1>To Do List</h1>
      <TodoForm onSubmit={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App
