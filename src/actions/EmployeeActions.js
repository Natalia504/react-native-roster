import firebase from 'firebase';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser} = firebase.auth(); //get the current user from Firebase

    firebase.database().ref(`/users/${currentUser.uid}/employees`) //it's where to store the data
        .push({ name, phone, shift });

}
