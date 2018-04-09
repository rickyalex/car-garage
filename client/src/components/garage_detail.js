import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Layout, Icon, Table } from 'antd';
import axios from 'axios';
import PageSider from './sider';
import PageHeader from './header';
import PageFooter from './footer';
const { Content } = Layout;
const queryString = require('query-string');

class GarageDetail extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    //get the data as soon the page completes loading
    axios.get('https://car-garage.herokuapp.com/api/garage/find/'+id)
      .then((response) => {
        this.setState({
          data: response.data.result
        }, () =>{
          console.log(this.state.data);
        })
      }, (err) => {
        console.error(err)
    })
  }

    render() {
      const name = this.props.match.params.id;
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
              <Link to={"car/"}>Edit</Link>
            </span>
          )
        }];
        return (
            <div className="App">
              <Layout>
                <PageSider />
                <Layout>
                  <PageHeader />
                  <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, textAlign: 'left' }}>
                    <div>
                      <h2>Name</h2>
                      <span>Address : {this.state.data.Name}</span><br />
                      <span>Phone Number : {this.state.data.Phone}</span><br />
                      <span>Email : {this.state.data.Email}</span><br />
                      <span>Max Cars : {this.state.data.MaxCars}</span><br /><br />
                      <Table columns={columns} size="small" />
                    </div>
                  </Content>
                  <PageFooter />
                </Layout>
              </Layout>
            </div>
        )
    }

}

export default GarageDetail;