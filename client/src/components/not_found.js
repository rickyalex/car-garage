import React, { Component } from 'react';
import '../App.css';
import { Layout, Icon } from 'antd';
import PageSider from './sider';
import PageHeader from './header';
import PageFooter from './footer';
const { Content } = Layout;

class NotFound extends Component {

    render() {
        return (
            <div className="App">
              <Layout>
                <PageSider />
                <Layout>
                  <PageHeader />
                  <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    Oops, Page Not Found
                  </Content>
                  <PageFooter />
                </Layout>
              </Layout>
            </div>
        )
    }

}

export default NotFound;