import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Home extends React.Component {
  state = {
    value: 0,
    inventoryName:"",
    employeeName:"",
    availableInventory:[]
  };


componentDidMount(){
   let comp=this
        axios.get('http://172.16.17.196:8090/fun-inventory/available-inventory'
      ).then(function (response) {
        console.log(response);
        comp.setState({availableInventory:response.data})
       })

}



  handleInventoryChange = name => event => {
   this.setState({ inventoryName: event.target.value });
 };
 handleEmployeeChange = name => event => {
  this.setState({ employeeName: event.target.value });
};

  addItem(){
      console.log(this.state.availableInventory)
      let availItems=this.state.availableInventory;
     let p=0
      p= availItems.map((name)=>{
          if(this.state.employeeName==name)
           return 1;

        })




      }

  deleteItem(){


  }


    updateItem(){

    //      var body={
    //         inventoryName
    //         employeeName
    //
    //      }
    //      axios.post('http://172.16.17.196:8090/fun-inventory/available-inventory', {
    //    firstName: 'Fred',
    //    lastName: 'Flintstone'
    //  })
    //  .then(function (response) {
    //    console.log(response);
    //  })
    //
    // }
}
    getItems(){
console.log(this.state.availableInventory)
    }




  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Add" />
            <Tab label="Delete" />
            <Tab label="Update" />
            <Tab label="Query" />
          </Tabs>
        </AppBar>

        {
          value === 0 && <TabContainer>
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
      <Button variant="contained" onClick={this.addItem.bind(this)}>
        Add
       </Button>
        </form>
      </TabContainer>
    }
        {
          value === 1 && <TabContainer>
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
      <Button variant="contained" onClick={this.deleteItem.bind(this)}>
        Delete
       </Button>
        </form>

        </TabContainer>
         }
        {
          value === 2 && <TabContainer>
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
      <Button variant="contained" onClick={this.updateItem.bind(this)}>
        Update
       </Button>
        </form>

        </TabContainer>
      }
      {
        value === 3 && <TabContainer>
                 <Button variant="contained" onClick={this.getItems.bind(this)}>
                   Query
                  </Button>
             </TabContainer>
         }
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
