import axios from 'axios';
import JsonFile from '@exponent/json-file';
import { apiBaseURL } from '../utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
    FETCHING_IMAGES_SUCCESS,
} from './Types';

export function FetchAllCoinData() {
    const getCoinImages = JsonFile.readAsync('./utils/coinimages.json',
            {cantReadFileDefault: {}}
        ).then(res => {
            dispatch({ type: FETCHING_IMAGES_SUCCESS, payload: res });
        });

    const getCoinData = axios.get(`${apiBaseURL}/v1/ticker/`)
        .then(res => {
            return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });                
        })
        .catch(err => {
            return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
        });

    return dispatch => {

        return Promise.all([
            getCoinImages,
            getCoinData
        ]).catch(err => {
            return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
        });

    };
}
