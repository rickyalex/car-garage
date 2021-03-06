import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import { Layout, Icon, Table } from 'antd';
import axios from 'axios';
import PageSider from './sider';
import PageHeader from './header';
import PageFooter from './footer';
import GarageDetail from './garage_detail';
import GarageForm from './garage_form';
const { Content } = Layout;
const queryString = require('query-string');

class Garage extends Component {
  constructor(props){
    super(props);

    this.state = {
      Name: '',
      Address: '',
      Email: '',
      Phone: '',
      MaxCars: ''
    }
  }

  componentDidMount(){
    const id = String(this.props.match.params.id);

    //get the data as soon the page completes loading
    axios.get('/api/garage/find/'+id)
      .then((response) => {
        this.setState({
          Name: response.data.result[0].Name,
          Address: response.data.result[0].Address,
          Email: response.data.result[0].Email,
          Phone: response.data.result[0].Phone,
          MaxCars: response.data.result[0].MaxCars,
        }, () =>{
          console.log(this.state);
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
                        <Switch>
                          <Route exact path="/garage/:id" component={ GarageDetail } />
                          <Route exact path="/garage/edit/:id" component={ GarageForm } />
                        </Switch>
                    </div>
                  </Content>
                  <PageFooter />
                </Layout>
              </Layout>
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

export default connect(mapsStateToProps, null)(Garage);