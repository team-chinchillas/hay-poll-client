import { SET_SESSION } from '../actions/session';

const initialState = {
  token: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SET_SESSION:
      return payload;
    default:
      return state;  
  }
}
