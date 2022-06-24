import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value:'');

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: input
    })

    setInput('');
}

return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
          <>
            <div className="form-group">
                <input
                    placeholder='Update your item'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input edit'
                />
            </div>
            <button onClick={handleSubmit} className='todo-button edit'>
                Update
            </button>
        </>
      ) : (
        <>
            <input
                placeholder='Add Todo'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
            />
            <button onClick={handleSubmit} className='btn btn-danger'>
                Add todo
            </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;