import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { PassGarageData, PassCarData } from '../actions';
import { Link } from 'react-router-dom';
import { Layout, Icon, Input, Button } from 'antd';
import axios from 'axios';
import PageSider from './sider';
import PageHeader from './header';
import PageFooter from './footer';
const { Content } = Layout;
const queryString = require('query-string');

class GarageForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      Name: this.props.GarageData.Name || '',
      Address: this.props.GarageData.Address || '',
      Email: this.props.GarageData.Email || '',
      Phone: this.props.GarageData.Phone || '',
      MaxCars: this.props.GarageData.MaxCars || 0
    }

    //this.mode = this.props.match.url.split("/")[2];
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    const id = String(this.props.match.params.id);
    let data = [];
    data.push(this.state);
    axios.put('/api/garage/update/'+id, this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push('/garage/'+id);
      }, (err) => {
        console.error(err)
    });
  }

    render() {
        return (
            <div>
              <span>Name :</span>
              <Input 
                placeholder="Garage name"
                defaultValue={this.state.Name} 
                onChange={e => this.setState({ Name: e.target.value })} />
              <span>Address :</span><Input defaultValue={this.state.Address} onChange={e => this.setState({ Address: e.target.value })} placeholder="Address" /><br />
              <span>Phone Number :</span><Input defaultValue={this.state.Phone} onChange={e => this.setState({ Phone: e.target.value })} placeholder="Phone" /><br />
              <span>Email :</span><Input defaultValue={this.state.Email} onChange={e => this.setState({ Email: e.target.value })} placeholder="Email" /><br />
              <span>Max Cars : </span><Input defaultValue={this.state.MaxCars} onChange={e => this.setState({ MaxCars: e.target.value })} placeholder="Max Car Count" /><br /><br />
              <Button 
                onClick={(e) => this.handleSubmit(e)}
                type="primary">
                Next
              </Button>
            </div>
        )
    }

}

function mapsStateToProps(state) {
    const { GarageData } = state;
    return {
        GarageData
    }
}

export default connect(mapsStateToProps, {PassGarageData})(GarageForm);