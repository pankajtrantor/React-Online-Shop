import { combineReducers } from "redux";
import { mycartReducer } from './mycartReducre';

const rootReducer = combineReducers({
    cartitems:mycartReducer
});

export default rootReducer;