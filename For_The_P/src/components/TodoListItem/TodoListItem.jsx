import React from "react";
import { ItemButton, ItemButtonDone, ItemList, ItemSpan } from "./TodoListItem.style";

function TodoListItem({todo, onIsDone, onRemove}){
   const {id, content, isDone} = todo;
    return(
        <>
        { isDone ?
                <ItemList $color={'grey'}>
                    <ItemSpan $color={'grey'}>{content}</ItemSpan>
                        <ItemButtonDone onClick={() => onRemove(id)}><img src="/check_fill.svg"/></ItemButtonDone> 
                </ItemList> :
                <ItemList $color={'black'}>
                    <ItemSpan $color={'black'}>{content}</ItemSpan>
                        <ItemButton onClick={() => onIsDone(id)}></ItemButton>               
                </ItemList >

            }
        </>
    );
}

export default TodoListItem;