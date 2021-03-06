import { curry, filter, isEmpty, isString, lowerCase, map, reduce, trim, values } from 'lodash';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
    FETCHING_IMAGES_SUCCESS,
    FILTER_DATA
} from '../actions/types';
import { imageUrlBase } from '../utils/constants';
import coinimages from '../utils/coinimages';

const emptyState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
    images: {}
}

function getImageUrl(images, symbol) {
    const imageData = images[symbol] || {};
    const { imageUrl } = imageData;
    return `${imageUrlBase}${imageUrl}`;
}

function stateWithCoinImages(state, payload) {
    const data = map(payload, currency => {
        const image_url = getImageUrl(state.images, currency.symbol);
        return { ...currency, image_url };
    });
    return Object.assign({}, state, {
        isFetching: false,
        data,
        allItems: data,
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

const matches = curry((pattern, row) => {
    if (isEmpty(pattern) || !isString(pattern)) {
      return true;
    }
    return lowerCase(row).indexOf(lowerCase(trim(pattern))) >= 0;
});

const filterRows = (state, pattern) => {
    if (isEmpty(trim(pattern))) {
      return Object.assign({}, state, {data: state.allItems});
    }
    const input = lowerCase(trim(pattern));
    const rowMatches = matches(input);
    const filteredList = filter(state.data,
      row => rowMatches(lowerCase(row.name)) || rowMatches(lowerCase(row.symbol))
    );
    return Object.assign({}, state, { data: filteredList });
}

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

        case FILTER_DATA:
            return filterRows(state, action.payload);

        default:
            return state;
    }   
}
