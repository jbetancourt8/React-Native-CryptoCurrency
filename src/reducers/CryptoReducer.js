import { map, reduce, values } from 'lodash';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
    FETCHING_IMAGES_SUCCESS,
} from '../actions/Types';

import { imageUrlBase } from '../utils/Constants';

import coinimages from '../utils/coinimages';

const emptyState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
    images: {}
}

function getImageUrl(images, symbol) {
    const imageUrl = images[symbol].imageUrl;
    return `${imageUrlBase}${imageUrl}`;
}

function stateWithCoinImages(state, payload) {
    const data = map(payload, currency => {
        const image_url = getImageUrl(state.images, currency.symbol);
        return { ...currency, image_url };
    });
    console.log('stateWithCoinImages: data: ', data);
    return Object.assign({}, state, {
        isFetching: false,
        data,
        hasError: false,
        errorMessage: null
    });
}

function initStateWithImages(state, coinData) {
    const data = coinData.Data;
    const images = reduce(values(data), (result, value) => {
        const key = value.Symbol;
        const imageUrl = value.ImageUrl;
        result[key] = { imageUrl };
        return result;
    }, {});
    return { ...state, images };
}

const initialState = initStateWithImages(emptyState, coinimages);

console.log('initialState: ', initialState);

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: [],
                hasError: false,
                errorMessage: null
            });

        case FETCHING_COIN_DATA_SUCCESS:
            return stateWithCoinImages(state, action.payload);

        case FETCHING_COIN_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.err
            });
        case FETCHING_IMAGES_SUCCESS:
            return Object.assign({}, state, { images: payload.Data })
        default:
            return state;
    }   
}