import React, { Component } from 'react';
import '../App.css';
import { Layout, Icon } from 'antd';
const { Footer } = Layout;

class PageHeader extends Component {
  state = {
    collapsed: false,
  };

      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

    render() {
        return (
            <Footer>
                Footer
            </Footer>
        )
    }

}

export default PageHeader;