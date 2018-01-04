import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import ImageReducer from './ImageReducer';

export default combineReducers({
    crypto: CryptoReducer,
    image: ImageReducer
});