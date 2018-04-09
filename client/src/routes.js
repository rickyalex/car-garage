import React, { Component } from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import App from './App';
import Garage from './components/garage';
import GarageDetail from './components/garage_detail';
import Car from './components/car';
import NotFound from './components/not_found';


class Routes extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={App}/>
                            <Route path="/home" component={App} />
                            <Route path="/garages" component={Garage} />
                            <Route path="/garage/:id" component={GarageDetail} />
                            <Route path="/car" component={Car} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Routes;