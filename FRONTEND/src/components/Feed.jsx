import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";
import { Search,Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  topbar:{
    display: "flex",
    alignItems: "center",
    justifyContent:"space-between",
    margin:"16px 0px",
  },
  right:{
    fontSize:"18px",
    fontWeight:"300",
    display: "flex",
    alignItems: "center",
  },
  home:{
    fontSize:"20px",
    fontWeight:"300",
  }
}));


const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.topbar}>
         <h2>Contact</h2>
         <div className={classes.right}>
           <Home className={classes.home}/>
           <div>/Apps/contact</div>
         </div>
      </div>
      <Post title="Choose the perfect design" img="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      </Container>
  );
};

export default Feed;
