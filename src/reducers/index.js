import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import PriceReducer from './reducer-prices';
import ServicesReducer from './reducer-services';
import StorageReducer from './reducer-storage';
import AboutUsReducer from './reducer-about-us';
const allReducers = combineReducers({
    users: UserReducer,
    prices: PriceReducer,
    services: ServicesReducer,
    storage: StorageReducer,
    aboutUs: AboutUsReducer
})

export default allReducers;