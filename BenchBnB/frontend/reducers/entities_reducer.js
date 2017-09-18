import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';
import merge from 'lodash/merge';
const defaultState = {
  benches: {}
};

const EntitiesReducer = (state=defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      return Object.assign({},{benches: action.benches});
    case RECEIVE_BENCH:
      return merge(state,{benches: action.benches});
    default:
      return state;

  }
};

export default EntitiesReducer;
