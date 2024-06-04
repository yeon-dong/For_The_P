import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { DoneList, TodoList, DoneText, DoneContainer } from "./TodoContainer.style";

function TodoContainer({todos, onIsDone, onRemove}){
    return(
      <>
        <div className='container'>
          <TodoList>
            {todos.filter((todo) => !todo.isDone).map((ingTodo) => (
              <TodoListItem
                todo={ingTodo}
                key={ingTodo.id}
                onIsDone={onIsDone}
                onRemove={onRemove}
              />
              ))
            }
          </TodoList>
        </div>
        <DoneContainer>
        {todos.filter((todo) => todo.isDone).length != 0 && <DoneText>완료</DoneText>}
        <DoneList>
            {todos.filter((todo) => todo.isDone).map((doneTodo) => (
              <TodoListItem
                todo={doneTodo}
                key={doneTodo.id}
                onIsDone={onIsDone}
                onRemove={onRemove}
              />
              ))
            }
        </DoneList>
        </DoneContainer>
    </>   
    );
}

export default TodoContainer;