import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import { PassGarageData, PassCarData } from '../actions';
import { Layout, Icon, Table, Button } from 'antd';
import axios from 'axios';
import PageSider from './sider';
import PageHeader from './header';
import PageFooter from './footer';
import GarageForm from './garage_form';
const { Content } = Layout;
const queryString = require('query-string');

class GarageDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      Name: '',
      Address: '',
      Email: '',
      Phone: '',
      MaxCars: '',
      ready: false,
      data: [],
      GarageID: ''
    }
  }

  componentWillMount(){
    const garageID = String(this.props.match.params.id);

    //get the data as soon the page completes loading
    axios.get('/api/garage/find/'+garageID)
      .then((response) => {
        this.setState({
          Name: response.data.result[0].Name,
          Address: response.data.result[0].Address,
          Email: response.data.result[0].Email,
          Phone: response.data.result[0].Phone,
          MaxCars: response.data.result[0].MaxCars,
          ready: true,
          GarageID: garageID
        }, () =>{
          //do something
          console.log(this.state);
          this.props.PassGarageData(this.state);
        })
      }, (err) => {
        console.error(err)
    })

    axios.get('/api/car/listbygarage/'+garageID)
      .then((response) => {
        this.setState({
          data: response.data.result
        }, () =>{
          //do something
          this.props.PassGarageData(this.state);
        })
      }, (err) => {
        console.error(err)
    })
  }

    render() {
      const columns = [
        {
          title: 'Brand',
          dataIndex: 'Brand',
        }, {
          title: 'Model',
          dataIndex: 'Model',
        }, {
          title: 'Year',
          dataIndex: 'Year',
        }, {
          title: 'Action',
          dataIndex: 'Action',
          render: (text, record) => (
            <span>
              <Link to={"/car/edit/"+record._id}>Edit</Link>
            </span>
          )

        }];
        return (
            <div>
              <h2>Name : {this.state.Name}
                <Link to={"/garage/edit/"+this.props.match.params.id}>
                  <Button 
                      type="primary"
                      disabled={!this.state.ready}
                      style={{ float: 'right' }}>
                      Edit
                  </Button>
                </Link></h2>
                        <span>Address : {this.state.Address}</span><br />
                        <span>Phone Number : {this.state.Phone}</span><br />
                        <span>Email : {this.state.Email}</span><br />
                        <span>Max Cars : {this.state.MaxCars}</span><br /><br />
                        <Table columns={columns} dataSource={this.state.data} size="small" />
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

export default withRouter(connect(mapsStateToProps, {PassGarageData})(GarageDetail));