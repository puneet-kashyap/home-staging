import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import PriceReducer from './reducer-prices';
import ServicesReducer from './reducer-services';

const allReducers = combineReducers({
    users: UserReducer,
    prices: PriceReducer,
    services: ServicesReducer
})

export default allReducers;