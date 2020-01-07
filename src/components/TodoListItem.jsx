import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContex';

const TodoListItem = ({ todo }) => {
    const { removeTodo } = useContext(TodoContext);

    return (
        <div>
            <button onClick={() => removeTodo(todo)} className="button button-clear"><i className="fa fa-trash"></i></button>
            {todo.title}
        </div>
    );
}

export default TodoListItem;