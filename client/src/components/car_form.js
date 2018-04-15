import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { PassGarageData, PassCarData, PassAllGarageData, PassAllCarData } from '../actions';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Icon, Input, Button, Select } from 'antd';
import axios from 'axios';
import PageSider from './sider';
import PageHeader from './header';
import PageFooter from './footer';
const { Content } = Layout;
const queryString = require('query-string');
const Option = Select.Option;

class CarForm extends Component {
  constructor(props){
    super(props);

    this.id = String(this.props.match.params.id);
    var carIndex;
    var i=0;

    this.props.GarageData.data.map((cardata)=>{
      if(cardata._id == this.id){
        carIndex = i;
      }
      i++;
    })

    this.state = {
      Brand: this.props.GarageData.data[carIndex].Brand || '',
      Model: this.props.GarageData.data[carIndex].Model || '',
      Year: this.props.GarageData.data[carIndex].Year || '',
      Color: this.props.GarageData.data[carIndex].Color || '',
      Mileage: this.props.GarageData.data[carIndex].Mileage || '',
      Engine: this.props.GarageData.data[carIndex].Engine || '',
      Power: this.props.GarageData.data[carIndex].Power || '',
      RegisDate: this.props.GarageData.data[carIndex].RegisDate || '',
      Price: this.props.GarageData.data[carIndex].Price || '',
      GarageID: this.props.GarageData.GarageID || '',
      GarageName: this.props.GarageData.Name || '',
      isLoading: false
    }

    this.max;
    this.arr;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.backtoGarage = this.backtoGarage.bind(this);
    this.handleGarage = this.handleGarage.bind(this);
  }

  backtoGarage(){
    this.props.history.push("/garage/"+this.state.GarageID);
  }

  ValidationForm() {
        const {
            Brand,
            Model,
            Year,
            RegisDate,
            GarageName
        } = this.state;

        return (
            Brand && Model && Year && RegisDate && GarageName
        )
    }

  checkGarageMax(GarageID){
    let max = 0;
    let count = 0;
    this.props.AllGarageData.map((garage)=>{
      if(garage._id == GarageID){
        max = garage.MaxCars;    
      }
    });

    this.props.AllCarData.map((car)=>{
      if(car.GarageID == GarageID){
        count++;
      }
    });

    console.log(max+' '+count);
    return (max > count);
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.ValidationForm()){
      alert('Brand, Model, Year or Regis Date not filled');
      return false;
    }
    else{
      this.setState({ isLoading: true });
      var check;

      check = this.checkGarageMax(this.state.GarageID);
      if(!check){
        alert('Maximum car in garage exceeded');
        this.setState({ isLoading: false });
        return false;
      }
      else{
        let data = [];
        data.push(this.state);
        axios.put('/api/car/update/'+this.id, this.state)
          .then((response) => {
            console.log(response);
            this.setState({ isLoading: false });
            this.props.history.push('/garage/'+this.state.GarageID);
          }, (err) => {
            console.error(err)
        });
      }
    }
  }

  handleGarage(garage) {
    this.setState({
      GarageID: garage
    }, () =>{
      //do something
      console.log(this.state);
    });
  }

  componentWillMount() {
    axios.get('/api/garage/list/')
      .then((res) => {  
        console.log(res);         
        this.props.PassAllGarageData(res.data.result);
      }).catch((err) => {
        console.log(err)
    })

    axios.get('/api/car/list/')
      .then((res) => {  
        console.log(res);         
        this.props.PassAllCarData(res.data.result);
      }).catch((err) => {
        console.log(err)
    })
  }

    render() {
      console.log(this.props);
        return (
          <div className="App">
              <Layout>
                <PageSider />
                <Layout>
                  <PageHeader />
                  <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, textAlign: 'left' }}>
                    <div>
                      <span>Garage : </span>
                      <Select
                        placeholder="Choose Garage"
                        onChange={this.handleGarage}
                        defaultValue={this.state.GarageName}
                        >
                      {
                            this.props.AllGarageData.map((garage) => {
                                return (
                                    <Option key={garage._id} value={garage._id} >{garage.Name}</Option>
                                )
                            })
                      }
                      </Select><br />
                      <span>Brand :</span><Input defaultValue={this.state.Brand} onChange={e => this.setState({ Brand: e.target.value })} placeholder="Car Brand" />
                      <span>Model :</span><Input defaultValue={this.state.Model} onChange={e => this.setState({ Model: e.target.value })} placeholder="Model name" /><br />
                      <span>Year :</span><Input defaultValue={this.state.Year} onChange={e => this.setState({ Year: e.target.value })} placeholder="Year of purchase" /><br />
                      <span>RegisDate : </span><Input defaultValue={this.state.RegisDate} onChange={e => this.setState({ RegisDate: e.target.value })} placeholder="Registration date" /><br />
                      <span>Color :</span><Input defaultValue={this.state.Color} onChange={e => this.setState({ Color: e.target.value })} placeholder="Car color" /><br />
                      <span>Mileage : </span><Input defaultValue={this.state.Mileage} onChange={e => this.setState({ Mileage: e.target.value })} placeholder="Mileage" /><br />
                      <span>Engine : </span><Input defaultValue={this.state.Engine} onChange={e => this.setState({ Engine: e.target.value })} placeholder="Engine type" /><br />
                      <span>Power : </span><Input defaultValue={this.state.Power} onChange={e => this.setState({ Power: e.target.value })} placeholder="Engine power" /><br />
                      <span>Price : </span><Input defaultValue={this.state.Price} onChange={e => this.setState({ Price: e.target.value })} placeholder="Car selling price" /><br /><br />
                      {
                        !this.state.isLoading ?
                                <Button 
                                  onClick={this.backtoGarage}
                                  type="danger"
                                  style={{ marginRight: '5px' }}>
                                  Back
                                </Button>
                                :
                                <Button 
                                  onClick={this.backtoGarage}
                                  type="danger"
                                  style={{ marginRight: '5px' }}
                                  disabled={true}>
                                  Back
                                </Button>
                      }
                      {
                        !this.state.isLoading ?
                                <Button 
                                  onClick={(e) => this.handleSubmit(e)}
                                  type="primary">
                                  Save
                                </Button>
                                :
                                <Button 
                                  type="primary"
                                  disabled={true}>
                                  <i className="fa fa-spinner fa-spin"></i> Saving...
                                </Button>
                      }
                      
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
    const { CarData, GarageData, AllGarageData, AllCarData } = state;
    return {
        CarData,
        GarageData,
        AllGarageData,
        AllCarData
    }
}

export default connect(mapsStateToProps, {PassCarData, PassGarageData, PassAllGarageData, PassAllCarData})(CarForm);