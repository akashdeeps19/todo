import React, {useState,useContext} from 'react';
import {todoContext} from "./TodoData";
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from "@material-ui/core/CardActions";
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade';
import Collapse from '@material-ui/core/Collapse';
import Checkbox from "@material-ui/core/Checkbox";
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteOutline from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles(theme => ({
    card: {
        position: 'relative',
        //display: 'flex',
      width: '90%',
      height: '5%',
      margin : 'auto',
      marginBottom : 10,
      background : '#333',
      color:'white'
    },
    header: {
        position : 'relative',
        //display : 'flex',
    },
    subheader: {
        // position : 'absolute',
        // top : 40,
        // left : '10%',
        marginTop : 15
    },
    delete:{
        position : 'absolute',
        top : 60,
        left : '80%'
    },
    check: {
      color:'white'
    },
    title: {
        textDecoration : 'none'
      },
      titleS: {
        textDecoration : 'line-through',
        textDecorationColor : 'rgba(255,255,255,0.7)'
      },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      position : 'top',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
}));

export default function Todo(props) {
    const [todo, setTodo,dones,setDones] = useContext(todoContext);
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [done, setDone] = useState(false);
    const [del, setDel] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const transitionTime = 500;
    const url1 = 'https://akashdeeps19-todoserver.glitch.me';
    const url = 'https://todo-akash.herokuapp.com';
    const updateTodo = async()=>{
        
        setDone(true);
        const res = await dbMethod(`${url}/events/updateDone/${props.todo._id}&${!props.todo.done}`,'PATCH');
        if(!props.todo.done){
            const d = todo.filter(t => (t._id == props.todo._id));
            d[0].done = true;
            setDones([d[0],...dones])
            const data = todo.filter(t => (t._id != props.todo._id));
            setTimeout(()=>setTodo(data),transitionTime);
        }
        else{
            const d = dones.filter(t => (t._id == props.todo._id));
            d[0].done = false;
            setTodo([d[0],...todo])
            const data = dones.filter(t => (t._id != props.todo._id));
            setTimeout(()=>setDones(data),transitionTime);
        }
        
    }

    const deleteTodo = async ()=>{
        setDone(true);
        const res = await dbMethod(`${url}/events/${props.todo._id}`,'DELETE');
        if(!props.todo.done){
            const data = todo.filter(t => (t._id != props.todo._id));;
            setTimeout(()=>setTodo(data),transitionTime);
        }
        else{
            const data = dones.filter(t => (t._id != props.todo._id));;
            setTimeout(()=>setDones(data),transitionTime);
        }
    }

    const dbMethod = async(url = '',meth = '')=> {
        try{
            const response = await fetch(url, {
                method: meth,
            });
            return await response.json();
        }
        catch(err){
            console.log(err);
        }  
    }

    return(
        
        <Fade in = {!done} timeout = {transitionTime}>
        <Card className={classes.card} onClick = {handleExpandClick}>
            <CardHeader 
                className = {classes.header}
                action={
                    <Checkbox color = 'primary' checked = {props.todo.done} className = {classes.check} onChange = {updateTodo}></Checkbox>
                }
                title={
                    <Typography className = {props.todo.done?classes.titleS:classes.title} variant = 'h5'>
                        {props.todo.title}</Typography>
                    }
                subheader={
                    <Typography className = {classes.subheader} variant = 'body2'>
                    {new Date(props.todo.deadline).toDateString()+' '+new Date(props.todo.deadline).toLocaleTimeString('en-IN')}
                    </Typography>}
            />
            <CardActions disableSpacing>
                <IconButton className = {classes.delete}aria-label="delete" onClick = {()=>setDel(true)}>
                <DeleteOutline color = 'secondary' />
                </IconButton>
                <Dialog 
                    open = {del}
                    onClose = {()=>setDel(false)}
                    
                >
                    <DialogTitle>Delete?</DialogTitle>
                    <DialogActions>
                        <Button onClick = {()=>{setDel(false)}}>Cancel</Button>
                        <Button onClick = {()=>{setDel(false);deleteTodo()}}>Delete</Button>
                    </DialogActions>
                </Dialog>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography>
                    {props.todo.description}
                </Typography>
                <Typography>
                    {props.todo.reminder?
                    new Date(props.todo.reminderTime).toDateString()+' '+new Date(props.todo.reminderTime).toLocaleTimeString('en-IN'):
                    'No reminder'
                    }
                </Typography>
                <Typography>
                    Label : {props.todo.label}
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
        </Fade>
    );

}
