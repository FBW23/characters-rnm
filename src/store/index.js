import { createStore } from 'redux';
import charactersReducer from '../reducers/';

const store = createStore(charactersReducer);

export default store;
