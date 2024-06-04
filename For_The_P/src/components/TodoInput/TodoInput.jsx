import React from 'react';
import { useState, useCallback } from 'react';
import { StyledInput } from './TodoInput.style';

function TodoInput({onAdd}) {

    const [newTodo, setNewTodo] = useState('');

    const onChange = useCallback(
        e => {
            setNewTodo(e.target.value);
        }
    , [])
    
    const onSubmit = useCallback(
        e => {
            onAdd(newTodo); //새로운 투두 추가
            setNewTodo(''); //인풋 창 초기화
            e.preventDefault(); //새로고침 방지
        }
    , [onAdd, newTodo])

    return(
        <>
            <form onSubmit={onSubmit}>
                <StyledInput
                onChange={onChange}
                value={newTodo}
                type='text' 
                placeholder='할 일 추가하기'/>
            </form>
        </>
    );
  
}

export default TodoInput;