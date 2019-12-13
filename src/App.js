import React from 'react';
import TodoList from './TodoList';
import {TodoData} from './TodoData';
import AddTodo from './AddTodo';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import './app.css'

const useStyles =makeStyles(theme => ({
  head : {
    backgroundColor : 'black', 
    height : 60,
    width : '100%',
    fontSize : 32,
    color : 'white',
    fontFamily : 'sans-serif',
    textAlign : 'center',
    position : 'fixed',
    top : 0
  },
  list : {
    position : 'absolute',
    top : 65,
    width : '100%',
    background:'black'
  },
  text : {
    top : 15
  }
  
}));

function App(){
  const classes = useStyles()
  const [head, setHead] = React.useState('Todos');

  const handleClick = ()=>{
    setHead(head == 'Todos'?'Done':'Todos');
  }
  return(
    <div>
      
      <TodoData>
      
      <div className = {classes.list}>
        <TodoList head = {head}/>
        </div>
        <AddTodo/>
      </TodoData>
      <div className = {classes.head}>
      <Typography variant = 'h3' className = {classes.text} onClick = {handleClick}>{head}</Typography>
      </div>
    </div>
  );
}

export default App;
