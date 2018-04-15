import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import { Layout, Icon, Table, Button } from 'antd';
import axios from 'axios';
import PageSider from './sider';
import PageHeader from './header';
import PageFooter from './footer';
import CarForm from './car_form';
const { Content } = Layout;

class Cars extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: []
		}
	}

	componentDidMount(){
        //get the data as soon the page completes loading
        axios.get('/api/car/list')
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
          title: 'Brand',
          dataIndex: 'Brand',
        }, {
          title: 'Model',
          dataIndex: 'Model',
        }, {
          title: 'Year',
          dataIndex: 'Year',
        }, {
          title: 'Registration Date',
          dataIndex: 'RegisDate',
        }, {
          title: 'Car ID',
          dataIndex: '_id',
        }, {
          title: 'GarageID',
          dataIndex: 'GarageID',
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

export default Cars;