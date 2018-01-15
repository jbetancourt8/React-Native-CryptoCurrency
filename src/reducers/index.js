import { combineReducers } from 'redux';
import cryptoReducer from './CryptoReducer';
import imageReducer from './ImageReducer';

export default combineReducers({
    crypto: cryptoReducer,
    image: imageReducer
});