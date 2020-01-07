import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContex';

const AddTodo = () => {
    const { addTodo } = useContext(TodoContext);

    const handleFormSubmit = e => {
        e.preventDefault();

        const input = document.getElementById('todo');
        if (!input.value || input.value === '')
            return;

        addTodo(input.value);
        input.value = "";
        input.focus();
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="todo" id="todo" placeholder="Nova tarefa.." />
            <button>ADICIONAR</button>
        </form>
    );
}

export default AddTodo;