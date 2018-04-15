import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Layout, Icon, Table, Divider, Button } from 'antd';
import PageSider from './sider';
import PageHeader from './header';
import PageFooter from './footer';
import axios from 'axios';
const { Content } = Layout;

class Garages extends Component {
  constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

  componentDidMount(){
        //get the data as soon the page completes loading
        axios.get('/api/garage/list')
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
        const columns = [
        {
          title: 'Name',
          dataIndex: 'Name',
        }, {
          title: 'Address',
          dataIndex: 'Address',
        }, {
          title: 'MaxCars',
          dataIndex: 'MaxCars',
        }, {
          title: 'Action',
          dataIndex: 'Action',
          render: (text, record) => (
            <span>
              <Link to={"/garage/"+record._id}>Detail</Link>
            </span>
          )
        }];

        return (
            <div className="App">
              <Layout>
                <PageSider />
                <Layout>
                  <PageHeader />
                  <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    <Table columns={columns} dataSource={this.state.data} size="small" />
                  </Content>
                  <PageFooter />
                </Layout>
              </Layout>
            </div>
        )
    }

}

export default Garages;