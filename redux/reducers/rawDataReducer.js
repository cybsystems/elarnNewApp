import {UPDATE_RAW_DATA} from '../actionType';

const initalState = {};

export const rawDataReducer = (state = initalState, action) => {
  const {type} = action;
  switch (type) {
    case UPDATE_RAW_DATA:
      return {...state, ...action.rawData};
    default:
      return state;
  }
};
