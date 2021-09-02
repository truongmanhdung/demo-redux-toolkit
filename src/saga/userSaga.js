import { call, put, takeLatest } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
export const login = createAction('users/login');
export const signup = createAction('users/signup');
function* loginSaga(action) {

}
function* signupSaga(action) {
    yield toast.success("SignUp successfully");
}
export function* userSaga() {
    yield takeLatest(login, loginSaga);
    yield takeLatest(signup, signupSaga);
}