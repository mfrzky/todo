import React, { useState } from 'react';
import { TrashFill, PencilFill } from 'react-bootstrap-icons';
import TodoForm from './TodoForm';

function Todo({todos, removeTodo, updateTodo}) {
    const [edit, setEdit] =useState ({ 
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit ({
            id: null, 
            value: ''
        })
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <table className='table table-responsive'>
            <thead className='thead-dark'>
                <tr>
                    <td>List</td>
                    <td>Action</td>
                    <td>Finish</td>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => {
                    return(
                        <>
                            <tr>
                                <td>{todo.text}</td>
                                <td>
                                    <TrashFill onClick={() => removeTodo(todo.id)} className='delete-icon me-3'/>
                                    <PencilFill onClick={() => setEdit({id: todo.id, value: todo.text})} className='edit-icon'/>
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        onChange={''}
                                    />
                                </td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Todo