import { SET_STAFF } from '../actions/types';

const initialState = {
    staff: {}
}

const pinAuth = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_STAFF:
        return {
          staff: action.staff,
        };
      default:
        return state;
    }
}

export default pinAuth;