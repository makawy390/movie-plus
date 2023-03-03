
import {createStore} from 'redux';
import loginReducer from '../reducer/reducer'
// import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(loginReducer);

export default store;