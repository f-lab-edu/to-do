import React, { useState, type ChangeEvent, type FormEvent } from 'react';

function TodoForm({ onSubmit } : any) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(input);
    setInput(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-row'>
        <input
          className="input mr-4 w-80"
          type="text"
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요."
        />
        <button 
          className='btn btn-blue'
          type="submit">추가</button>
      </div>
    </form>
  );
}

export default TodoForm;