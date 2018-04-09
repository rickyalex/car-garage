import React, { Component } from 'react';
import '../App.css';
import { Layout, Icon } from 'antd';
const { Header } = Layout;

class PageHeader extends Component {

    render() {
        return (
            <Header style={{ background: '#fff', padding: '0 20px', textAlign: 'left' }}>
                <h2>Car Garage</h2>
            </Header>
        )
    }

}

export default PageHeader;