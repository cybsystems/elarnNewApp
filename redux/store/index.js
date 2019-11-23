import {combineReducers, createStore} from 'redux';
import {rawDataReducer} from '../reducers/rawDataReducer';
const reducers = combineReducers({rawData: rawDataReducer});

export const store = createStore(reducers);
