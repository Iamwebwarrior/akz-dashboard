import {
    Button,
    Container,
    Fab,
    FormControlLabel,
    FormLabel,
    makeStyles,
    MenuItem,
    Modal,
    Radio,
    RadioGroup,
    Snackbar,
    TextField,
    Tooltip,
  } from "@material-ui/core";

import React, { useState } from 'react'
import "./css/compose.css"
import axios from "axios";
import RemoveIcon from '@material-ui/icons/Remove';
import HeightIcon from "@material-ui/icons/Height";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import LinkIcon from "@material-ui/icons/Link";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import PhotoIcon from "@material-ui/icons/Photo";
import PhonelinkLockIcon from "@material-ui/icons/PhonelinkLock";
import CreateIcon from "@material-ui/icons/Create";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage } from './features/mailSlice'; //here it is
import { selectUser } from './features/userSlice';

const useStyles = makeStyles((theme) => ({
    fab: {
      position: "fixed",
      bottom: 20,
      right: 20,
    },
    container: {
      zIndex:2,
      width: 500,
      height: 550,
      backgroundColor: "white",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      boxShadow: "0px 0px 8px rgb(51 51 51/59%)",
      margin: "auto",
      marginTop:"25px",
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
        height: "100vh",
      },
    },
    form: {
      padding: theme.spacing(2),
    },
    item: {
      marginBottom: theme.spacing(3),
    },
    bodyhere:{
        
    }
  }));


function Compose() {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("designer");
    const classes = useStyles();
    //redux part
    const dispatch = useDispatch();
    //const user = useSelector(selectUser)

    const formSubmit = async (e) =>{
            e.preventDefault();
        //    if(id==="")
        //    {
        //        return alert("Id is required");
        //    }
        //    if(name==="")
        //    {
        //        return alert("name is required");
        //    }
        //    if(email==="")
        //    {
        //        return alert("emaiil is required");
        //    }
        //    if(phone==="")
        //    {
        //        return alert("phone is required");
        //    }
        //    if(role==="")
        //    {
        //        return alert("role is required");
        //    }

           //--------------------------------------------------------
        const newPost = {
            id,
            name,
            email,
            phone,
            role
          };
          console.log(id);
          console.log(name);
          console.log(email);
          console.log(phone);
          console.log(role);
          console.log("----data got send----");

         // alert(id+name);

          try {
            const res = await axios.post("/lists", newPost);
            console.log(res.data);
          //  setaddCount(c => c + 1);
          // window.location.replace("/");//this will show display post content
             
          } catch (err) {}

           
        //     //once email is send set this fields empty
        //    setTo("");  
        //    setSubject("");
        //    setMessage("");
        //    alert("Email sent successfully");;
         
        //dispatch(closeSendMessage());
    }
    return (
        <div className={classes.bodyhere}>
                <Container className={classes.container}>
          <form className={classes.form} autoComplete="off" onSubmit={formSubmit}>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Id"
                size="small"
                style={{ width: "100%" }}
                //value={id} 
                onChange={(e)=>setId(e.target.value)}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Email"
                size="small"
                style={{ width: "100%" }}
                //value={email}  
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Name"
                size="small"
                style={{ width: "100%" }}
                //value={name}  
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Phone"
                size="small"
                style={{ width: "100%" }}
               // value={phone}  
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Role" value="designer"  onChange={(e)=>setRole(e.target.value)}>
                <MenuItem value="designer">Designer</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="chairman">chairman</MenuItem>
              </TextField>
            </div>
            
            <div className={classes.item}>
            <button className="publish" type="submit" style={{ marginRight: 20 }}>
                       Register
            </button>
              {/* <Button
                variant="outlined"
                color="primary"
                type="submit"
                style={{ marginRight: 20 }}
              //  onClick={}
              >
                publish here
              </Button> */}
              <Button
                variant="outlined"
                color="secondary"
                onClick={()=>dispatch(closeSendMessage())}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
        </div>
    )
}

export default Compose
