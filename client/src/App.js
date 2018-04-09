import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import PageSider from './components/sider';
import PageHeader from './components/header';
import PageFooter from './components/footer';
const { Header, Sider, Content } = Layout;

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <PageSider />
          <Layout>
            <PageHeader />
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              Home
            </Content>
            <PageFooter />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
