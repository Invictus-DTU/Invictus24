/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './Error';
import Body from './Body';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED
  }
}

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users
  }
}

const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error
  }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data.map(user => user.id)
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(fetchUsers())

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        //let response = await fetch('http://localhost:8080/api/authenticate',{method: "GET"})
        //.then((result)=>{
            <GoogleOAuthProvider
              clientId="1010618076889-08tjso93glf22tik2okuvcic621u0l8k.apps.googleusercontent.com"
              redirectUri="http://localhost:3000"
            >
              <App />
            </GoogleOAuthProvider>
        //})
       // .catch((err)=> console.log(err))
       
      }
      errorElement={<Error />}
    >
      <Route index element={<Body />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);*/

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//import { store } from './app/store'
//import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
  <GoogleOAuthProvider
    clientId="1010618076889-08tjso93glf22tik2okuvcic621u0l8k.apps.googleusercontent.com"
    redirectUri="http://localhost:3000"
  >
    <App />
  </GoogleOAuthProvider>,
  document.getElementById('root')
)