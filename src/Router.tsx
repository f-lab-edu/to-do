import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailTodo from './pages/DetailTodoPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="detail" element={<DetailTodo />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;