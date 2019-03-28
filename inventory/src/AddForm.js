import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class AddForm extends React.Component{
  constructor() {
        super()
        this.state={
          inventoryName:"",
          employeeName:""
        }
  }

  handleInventoryChange = name => event => {
   this.setState({ inventoryName: event.target.value });
 };
 handleEmployeeChange = name => event => {
  this.setState({ employeeName: event.target.value });
};

  addItem(){

    


  }


  render(){

    return(
        <form>
        <TextField
          id="invetoryName"
          label="invetoryName"
          value={this.state.inventoryName}
          onChange={this.handleInventoryChange('name')}
          margin="normal"
        />
        <TextField
          id="employeeName"
          label="employeeName"
          value={this.state.employeeName}
          onChange={this.handleEmployeeChange('name')}
          margin="normal"
        />
      <Button variant="contained" onClick={this.addItem()}>
        Add
       </Button>
        </form>


    )
  }



}



export default AddForm
