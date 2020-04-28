import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'
 
 
export const GET_PROJECT = 'GET_PROJECT';
export const ADD_PROJECT = 'ADD_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const IS_LOADING = 'IS_LOADING';
export const SET_ERROR = 'SET_ERROR';
 
export const getProject = () => dispatch => {
   dispatch({ type: GET_PROJECT});
   axiosWithAuth()
   .get('/projects')
   .then(res => {
       console.log('!!!!!!', res)
   })
   .catch(err => {
       console.log(err)
       dispatch ({ type: SET_ERROR, payload: 'error'})
   })
}
 
export const editProject = (id, project) => dispatch => {
   axiosWithAuth()
   .put(`https://vr-funding1.herokuapp.com/projects/${id}`, project)
   .then(res => ({ type: UPDATE_PROJECT, project}))
}
