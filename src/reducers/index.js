import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import PriceReducer from './reducer-prices';

const allReducers = combineReducers({
    users: UserReducer,
    prices: PriceReducer
})

export default allReducers;