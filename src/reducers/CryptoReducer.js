import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
    FETCHING_IMAGES_SUCCESS,
} from '../actions/Types';

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null,
    images: []
}

function getImageUrl(state, currency) {
    const imageUrl = state[currency].ImageUrl;
    return `${imageUrlBase}${imageUrl}`;
}

function stateWithCoinImages(state, payload) {
    const data = payload.map(currency => {
        return Object.assign({}, currency, {
            image_url: getImageUrl(state.images, currency.symbol)
        })
    }); 
    return Object.assign({}, state, {
        isFetching: false,
        data,
        hasError: false,
        errorMessage: null
    });

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
        default:
            return state;
    }   
}