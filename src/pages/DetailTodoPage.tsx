import { useLocation, useNavigate } from "react-router-dom";
import type { Todo } from "../types";

function DetailTodoPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const todoId: number = location.state.id;

    const todosString = localStorage.getItem('todos');
    const todos: Todo[] = todosString ? JSON.parse(todosString) : [];
    const currentTodo: Todo | undefined = todos.find((todo : Todo) => todo.id === todoId);

    const goList = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>상세 페이지</h1>
            <p>내용:{currentTodo?.text} </p>
            <button className='btn btn-blue' onClick={goList}>목록</button>
        </div>
    );
}

export default DetailTodoPage;
