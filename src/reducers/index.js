import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers ({
    auth: AuthReducer,      //in LoginForm.js state: state.auth.email
    employeeForm: EmployeeReducer
});