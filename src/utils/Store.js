import { Platform } from 'react-native';    
import { 
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers';

const middleware = applyMiddleware(promise, thunk);

const Store = createStore(
    reducers,
    compose(
        middleware
    )
);

export default Store;