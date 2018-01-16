import axios from 'axios';
import { apiBaseURL } from '../utils/constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
    FETCHING_IMAGES_SUCCESS,
} from './types';

export function FetchAllCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA, payload: {} });

        axios.get(`${apiBaseURL}/v1/ticker/`).then(res => {
            return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });                
        })
        .catch(err => {
            return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
        });
    };
}
