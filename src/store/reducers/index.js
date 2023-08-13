import { combineReducers } from "redux";
import { mycartReducer } from './mycartReducre';
import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducer'

const rootReducer = combineReducers({
    shopCartItems:mycartReducer,
    userDB : signupReducer,
    loginUser : loginReducer  
});

export default rootReducer;