import {UPDATE_RAW_DATA} from '../actionType';
import {store} from '../store';

export const updateRawData = rawData => {
  store.dispatch({type: UPDATE_RAW_DATA, rawData});
};
