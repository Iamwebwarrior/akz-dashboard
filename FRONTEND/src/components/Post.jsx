import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Search,Menu,Add } from "@material-ui/icons";
import { productRows } from "../dummyData";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";


import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  mains:{
    display: "flex",
    alignItems:"center",
    justifyContent:"space-between",
    margin:"16px 4px",
  },
  listhere:{
     color:"yellow",
  },
  search:{
    width:"200px",
    borderRadius:"8px",
    display: "flex",
    alignItems:"center",
    justifyContent:"flex-start",
    backgroundColor:"grey",
  },
  inner:{
    display: "flex",
    flexDirection:"column",
  },
  inner2:{
    fontSize:"10px",
    margin:"0px 2px",
  },
}));

const Post = () => {
  const dispatch = useDispatch();  //redux here
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [data, setData] = useState(productRows);

  console.log(data);
  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // const rows = [
  //   { id: 1, Name: "Snow",stock: 123,status: "active", price: "$120.00",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  //   { id: 2, Name: "Snow",stock: 123,status: "active", price: "$120.00",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  //   { id: 3, Name: "Snow",stock: 123,status: "active", price: "$120.00",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
  //   { id: 4, Name: "Snow",stock: 123,status: "active", price: "$120.00",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},

    
  // ];

  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "product",
  //     headerName: "Product",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="productListItem">
  //           <img className="productListImg" src={params.row.img} alt="" />
  //           {params.row.name}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "stock", headerName: "Stock", width: 200 },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 120,
  //   },
  //   {
  //     field: "price",
  //     headerName: "Price",
  //     width: 160,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={"/product/" + params.row.id}>
  //             <button className="productListEdit">Edit</button>
  //           </Link>
  //           <DeleteOutline
  //             className="productListDelete"
  //             onClick={() => handleDelete(params.row.id)}
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', 
      headerName: 'User Info', 
      width: 150,
      renderCell: (params) => {
              return (
                <div className="productListItem">
                  <img className="productListImg" src={params.row.img} alt="" />
                  <div className={classes.inner}>
                  <div className={classes.inner1}>{params.row.name}</div>
                  <div className={classes.inner2}></div>
                  </div>
                </div>
              );
            },
     },
     { field: 'email', headerName: 'Email', width: 150 },
    { field: 'number', headerName: 'Phone', width: 150 },
    {
      field: 'date',
      headerName: 'Join Date',
      type: 'number',
      width: 150,
    },
    {
      field: 'role',
      headerName: 'Role',
      type: 'number',
      width: 150,
      renderCell: (params) => {
        return (
          <Button variant="contained">{params.row.role}</Button>
        );
      },
    },
    {
          field: "action",
          headerName: "Action",
          width: 120,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
    
  ];
  
  const rows = [
    { id: 1, name: "Akshay Mayekar",email: "akshay@gmail.com",number: 987654321, date:"23-11-23", role:"dev",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
    { id: 2, name: "Akshay",email: "akshay@gmail.com",number: 987654321, date:"23-11-23", role:"dev",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
    { id: 3, name: "Akz",email: "akshay@gmail.com",number: 987654321, date:"23-11-23", role:"dev",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
    { id: 4, name: "Snow man",email: "akshay@gmail.com",number: 987654321, date:"23-11-23", role:"dev",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
    { id: 5, name: "snow here",email: "akshay@gmail.com",number: 987654321, date:"23-11-23", role:"dev",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
    { id: 6, name: "nxt man",email: "akshay@gmail.com",number: 987654321, date:"23-11-23", role:"dev",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},
    { id: 7, name: "Snow",email: "akshay@gmail.com",number: 987654321, date:"23-11-23", role:"dev",img:"https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},

   
  ];
  
  return (
    <>
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.mains}>
          <Button variant="contained" onClick={()=>dispatch(openSendMessage())}><Add/>Add Contact</Button>
          <div className={classes.search}><Search/> here</div>
        </div>

        {/* <div className={classes.listhere}>
                <DataGrid
              rows={rows}
              disableSelectionOnClick
              columns={columns}
              pageSize={8}
              checkboxSelection
              />
              
        </div> */}

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

        
      </CardActionArea>
      
    </Card>
    
    

   
   </>
  );
};

export default Post;
