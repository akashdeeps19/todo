import React, {useState,useContext} from 'react';
import {todoContext} from './TodoData';
import {DateTimePicker,MuiPickersUtilsProvider,} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fab: {
      position: 'fixed',
      //display: 'flex',
      width: 55,
      height: 55,
      //left : '50%',
      right : '40%',
      bottom : '5%'
  },
  form : {
    //position : "absolute",
    margin : 0
  },
  actions : {
    position : 'absolute',
    bottom : '35%',
    left : '45%'
  },
  text : {
    color : 'white'
  }
}));

export default function AddTodo() {
    const classes = useStyles();
    const [todo,setTodo] = useContext(todoContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState(Date.now());
    const [reminder, setReminder] = useState(true);
    const [reminderTime, setReminderTime] = useState(Date.now());
    const [label, setLabel] = useState('');
    const [open, setOpen] = useState(false);

    const url1 = 'https://akashdeeps19-todoserver.glitch.me';
    const url = 'https://todo-akash.herokuapp.com';
    const addTodo = async (e)=>{
        e.preventDefault();
        const data = {
            title : title,
            description : description,
            deadline : deadline,
            done : false,
            reminder : reminder,
            reminderTime : reminderTime,
            reminded : !reminder,
            label : label
        }
        try{
            const res = await postData(url+'/events',data);
            setTodo(prevTodo => [res,...prevTodo]);
            console.log(res);
        }
        catch(err){
            console.error(err);
        }

    }
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const postData = async(url = '', data = {})=> {
        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrer: 'no-referrer',
          body: JSON.stringify(data)
        });
        return await response.json();
      }

    const handleClose = (e)=>{
        if(e.currentTarget.id == "add"){
            addTodo(e);
        }
        setDeadline(Date.now());
        setReminder(true);
        setDescription('');
        setTitle('');
        setReminderTime(Date.now());
        setOpen(!open);
    }

    return (
        <div>
          <Fab className = {classes.fab}color="primary" onClick={()=>setOpen(true)}>
            <AddIcon/>
          </Fab>
          <Dialog fullScreen = {fullScreen}
            PaperProps={{
              style: {
                backgroundColor: 'beige',
              },
            }} className = {classes.form} open={open} onClose={()=>setOpen(!open)} aria-labelledby="form-dialog-title">
            <DialogTitle className = {classes.form} id="form-dialog-title">Todo</DialogTitle>
            <DialogContent className = {classes.form}>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                type="text"
                fullWidth
                label = "Title"
                value = {title}
                color = 'textPrimary' 
                onChange = {e => setTitle(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                type="text"
                label = 'Descp'
                fullWidth
                color = 'white' 
                value = {description}
                onChange = {e => setDescription(e.target.value)}
              />
              <MuiPickersUtilsProvider utils = {DateFnsUtils}>
                    <DateTimePicker color = 'white'  value = {deadline} onChange = {setDeadline} label = "Deadline"/>
                </MuiPickersUtilsProvider>
            <Checkbox
                value={reminder}
                onChange = {e => setReminder(!reminder)}
                checked = {reminder}
                color = "white"
            />
            {reminder && 
            <MuiPickersUtilsProvider utils = {DateFnsUtils}>
            <DateTimePicker color = 'white'  value = {reminderTime} onChange = {setReminderTime} label = "Reminder"/>
            </MuiPickersUtilsProvider>
            }
            {/* <TextField
                autoFocus
                margin="dense"
                id="label"
                type="text"
                fullWidth
                color = 'white' 
                value = {label}
                label = 'Label'
                onChange = {e => setLabel(e.target.value)}
              /> */}
            </DialogContent>
            <DialogActions >
              <Button color = 'white'id = 'cancel' onClick={e => handleClose(e)} color="primary">
                Cancel
              </Button>
              <Button color = 'white' id = "add" onClick={e =>handleClose(e)} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}
