import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import Axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery ('FETCH_MOVIES', fetchMovies )
    yield takeEvery('FETCH_DETAILS', fetchDetails)
}

function* fetchMovies() {
    try {
        const response = yield Axios.get('/movie/info');
        yield put({ type: 'SET_MOVIES', payload: response.data })
      
    } catch (error) {
        console.log('error getting movies', error);
        alert('Could not not get data at this time. Try again later ', error)
    }
}

function* fetchDetails(action) {

    try {
        console.log(action.payload);
        const response = yield Axios.get(`/movie/details/${action.payload}`);
        yield put({ type: 'SET_DETAILS', payload: response.data })

    } catch (error) {
        console.log('error getting movies', error);
        alert('Could not not get DETAILS at this time. Try again later ', error)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
