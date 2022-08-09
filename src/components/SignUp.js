import React ,{useState,useRef} from 'react';
//import { useHistory } from 'react-router-dom';
import { NavLink, useNavigate} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import { baseUrl } from '../baseUrl';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



export default function Signup() {
  const classes = useStyles();


  const history=useNavigate();
  
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [role, setrole] = useState('');
  const messageRef = useRef(null);
 

  const register=async(e)=>{
    e.preventDefault();
    //console.log("in",name,username,password,role);
    console.log(email,role,password);
    const res=await fetch('http://localhost:8090/signup', {

      method:'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        
          },
      body:JSON.stringify({
        email,
        password,
        role,
        
      }),
     //credentials:'include'

    });

   const data= await res.json();
    console.log(data);
    messageRef.current.innerHTML=data.message;
      if((res.status===201))
        history.push('/login');
     
   
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" gutterBottom>
          Register
        </Typography>
        <div className="mb-3" ref={messageRef} style={{color: "red"}}> </div>
        <form className={classes.form} noValidate onSubmit={register}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
              value={role}
              onChange={(e)=>{setrole(e.target.value)}}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="role"
                label="Role"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
               value={password}
               onChange={(e)=>{setpassword(e.target.value)}}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
                <NavLink to="/login" >
                  <Typography compoenet="h6" variant="body2" >
                    Already have an account? Sign in
                  </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}