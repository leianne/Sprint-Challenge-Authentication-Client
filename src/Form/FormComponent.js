import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormComponent = props => {
    return(
        <form className="formContainer">
            <TextField
              id="outlined-name"
              label="Username"
              name="username"
              className="formText"
              value={props.user.username}
              onChange={props.handleChanges}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Password"
              name="password"
              className="formText"
              value={props.user.password}
              onChange={props.handleChanges}
              margin="normal"
              variant="outlined"
            />
            
            <Button onClick={(e) => props.handleSubmit(e)} variant="outlined" color="inherit" id="formBtn">
              {props.registering ? 'Register' : 'Login'}
            </Button>
            
          </form>
    )
}

export default FormComponent;