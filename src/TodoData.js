import React,{useState,useEffect,createContext} from 'react'

export const todoContext = createContext();

export const TodoData = (props)=> {
    const [todos, setTodos] = useState([]);
    const [dones, setDones] = useState([]);

    const url1 = 'https://akashdeeps19-todoserver.glitch.me';
    const url = 'https://todo-akash.herokuapp.com';

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        let res = await fetch(url+'/events/todos');
        let data = await res.json();
        console.log(data);
        setTodos(data);
        res = await fetch(url+"/events/dones");
        data = await res.json();
        console.log(data);
        setDones(data);
    }
    
    return (
        <todoContext.Provider value = {[todos,setTodos,dones,setDones]}>
            {props.children}
        </todoContext.Provider>
    );
}

