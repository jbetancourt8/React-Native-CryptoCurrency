import {
    FETCHING_IMAGES
} from '../actions/Types';

const initialState = {
    images: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCHING_IMAGES:
            return Object.assign({}, ...state, 
                {images: action.payload});
    
        default:
            return state;
    }   
}