import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone:'',
    shift: ''
}

export default (state = INITIAL_STATE, action ) => {
    switch (action.types) {
        case EMPLOYEE_UPDATE:
        return { ...state, [action.payload.prop]: action.payload.value } // [key interpolation], not array!

        default:
        return state;
    }
};