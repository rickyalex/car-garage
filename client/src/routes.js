import React, { Component } from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import App from './App';
import Garages from './components/garages';
import Garage from './components/garage';
import GarageForm from './components/garage_form';
import Cars from './components/cars';
import CarForm from './components/car_form';
import NotFound from './components/not_found';


class Routes extends Component {

    render() {
        return (
            <div>
                <Router>
                        <Switch>
                            <Route exact path="/" component={App}/>
                            <Route path="/home" component={App} />
                            <Route path="/garages" component={Garages} />
                            <Route path="/garage" component={Garage} />
                            <Route path="/cars" component={Cars} />
                            <Route path="/car/edit/:id" component={CarForm} />
                            <Route component={NotFound} />
                        </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes;