import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
      //SQUARE BRACES ARE NOT AN ARRAY, KEY INTERPOLATION
      //KEY WILL BE DETERMINED AT RUN TIME
    default:
      return state;
  }
};
