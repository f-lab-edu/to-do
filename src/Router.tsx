import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailTodo from './pages/DetailTodoPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="detail" element={<DetailTodo />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;