import { combineReducers } from 'redux'
import CarData from './reducer_car_data';
import GarageData from './reducer_garage_data';
import AllGarageData from './reducer_all_garage_data';
import AllCarData from './reducer_all_car_data';

export default combineReducers({
    CarData,
    GarageData,
    AllGarageData,
    AllCarData
})