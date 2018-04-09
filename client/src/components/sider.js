import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';
import { Menu, Icon } from 'antd';
import { Layout } from 'antd';
const { Sider } = Layout;

class PageSider extends Component {

    render() {
        return (
          <Sider>
            <div className="logo">
            </div>
            <Menu theme="dark" mode="inline" >
              <Menu.Item key="1">
                <Link to="/garages"><Icon type="user" />
                <span>Garages</span></Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/car"><Icon type="video-camera" />
                <span>Cars</span></Link>
              </Menu.Item>
            </Menu>
          </Sider>
        )
    }

}

export default PageSider;