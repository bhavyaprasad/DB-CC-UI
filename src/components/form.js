import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Create() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/table`; 
    navigate(path);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Security
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Security Id"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="ISIN"
            label="ISIN"
            type="ISIN"
            id="ISIN"
            autoComplete="current-ISIN"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="CUSIP"
            label="CUSIP"
            type="CUSIP"
            id="CUSIP"
            autoComplete="current-CUSIP"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Issuer"
            label="Issuer"
            type="Issuer"
            id="Issuer"
            autoComplete="current-Issuer"
          />
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
      variant="outlined"
        label="Maturity date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Maturity Date"
            label="Maturity Date"
            type="Maturity Date"
            id="Maturity Date"
            autoComplete="current-Maturity Date"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Face Value"
            label="Face Value"
            type="Face Value"
            id="Face Value"
            autoComplete="current-Face Value"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={routeChange}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}
