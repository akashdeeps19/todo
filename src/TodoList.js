import React, { Component,useContext,useEffect } from 'react';
import {todoContext} from "./TodoData";
import Todo from './Todo';

const TodoList = (props)=> {

    const [todos,setTodos,done,setDone] = useContext(todoContext);
    const [data, setData] = React.useState([]);

    // useEffect(()=>{
    //     setData(props.head === 'Todos'?todos:done);
    // },[todos,done,props.head])
    
    return (
        <div>
            {todos.map(todo=>(
            props.head === 'Todos' && <Todo key = {todo._id} todo = {todo}></Todo>
        ))}
        {done.map(todo=>(
            props.head !== 'Todos' && <Todo key = {todo._id} todo = {todo}></Todo>
        ))}
        </div>
    )
}


export default TodoList
