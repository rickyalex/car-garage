import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Layout, Icon, Table, Divider } from 'antd';
import PageSider from './sider';
import PageHeader from './header';
import PageFooter from './footer';
import axios from 'axios';
const { Content } = Layout;

class Garage extends Component {
  constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

  componentDidMount(){
        //get the data as soon the page completes loading
        axios.get('https://btctracker.herokuapp.com/api/search')
            .then((response) => {
                this.setState({
                    //data: [...response.data.result, 'add']
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
          title: 'Ask',
          dataIndex: 'Ask',
        }, {
          title: 'Last',
          dataIndex: 'Last',
        }, {
          title: 'Bid',
          dataIndex: 'Bid',
        }, {
          title: 'Time',
          dataIndex: 'Time',
        }, {
          title: 'Action',
          dataIndex: 'Action',
          render: (text, record) => (
            <span>
              <Link to={"garage/"+record._id}>Edit</Link>
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

export default Garage;