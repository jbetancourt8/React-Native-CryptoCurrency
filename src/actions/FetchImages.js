import axios from 'axios';
import { apiBaseURL2 } from '../utils/Constants';
import {
    FETCHING_IMAGES
} from './Types';

export default function FetchImages() {
    return dispatch => {

        dispatch({ type: FETCHING_IMAGES })

        return axios.get(`${apiBaseURL2}`)
            .then(res => {
                var array = Object.keys(res.data.Data).map(function (key) { return res.data.Data[key]; });
                return dispatch({type: FETCHING_IMAGES, payload: array})
            })
            .catch(err => console.log(err));
    }
}