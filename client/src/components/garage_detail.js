import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Layout, Icon, Table } from 'antd';
import PageSider from './sider';
import PageHeader from './header';
import PageFooter from './footer';
const { Content } = Layout;
const queryString = require('query-string');

class GarageDetail extends Component {
  constructor(props){
    super(props);
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
                      <span>Address : {name}</span><br />
                      <span>Phone Number : {name}</span><br />
                      <span>Email : {name}</span><br />
                      <span>Max Cars : {name}</span><br /><br />
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