import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:7001/api'
});
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);