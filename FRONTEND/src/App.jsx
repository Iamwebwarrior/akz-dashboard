import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Graphs from "./components/graphs/Graphs";
import Userlist from "./pages/userlist/Userlist";
import User from "./pages/user/User";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Compose from "./Compose";
import Post from "./components/Post";
import Feed from "./components/Feed";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import { Grid, makeStyles } from "@material-ui/core";
import "./App.css";

import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
{/* <div className="mainwrapper">
            <div className="wrapper1">
              <Sidebar/>
            </div>
            <div className="wrapper2">
              
            <Switch>
                <Route exact path="/">
                    <Graphs />
                 </Route>
                 <Route path="/userslist">
                    <Userlist />
                 </Route>
                 <Route path="/user/:userId">
                     <User />
                  </Route>
               
            </Switch>
            </div>
      </div>    */}

      const useStyles = makeStyles((theme) => ({
        right: {
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        },
      }));

function App() {
  const classes = useStyles();
  const dispatch= useDispatch();
  const isMessageOpen = useSelector(selectSendMessageIsOpen); //importing redux
  return (
    <Router>
    <div className="App">
      <Navbar/>
       
      <Grid container>
        <Grid item sm={2} xs={2}>
         <Leftbar/>
          </Grid>
        <Grid item sm={10} xs={10}>
          <Feed/>
          {
            isMessageOpen && <Compose/> //if there is message opn then execute comose compoment
          }
        </Grid>
      </Grid>
    </div>
    </Router>
  );
}

export default App;
