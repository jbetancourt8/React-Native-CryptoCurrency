import { imageUrlBase } from '../utils/Constants';
import {
    FETCHING_IMAGES
} from '../actions/Types';

const initialState = {
    data: {
        BTC: {
            ImageUrl: "/media/19633/btc.png"
        }
    }
};

export function getImageUrl(state, currency) {
    const imageUrl = state[currency].ImageUrl;
    return `${imageUrlBase}${imageUrl}`;
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCHING_IMAGES:
            return Object.assign({}, ...state, 
                {images: action.payload});
    
        default:
            return state;
    }   
}