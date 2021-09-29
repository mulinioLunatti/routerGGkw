import {combineReducers} from 'redux'
import storyReducer from "./storyReducer";
import draftReducer from "./draftReducer";
import userReducer from "./userReducer";
import tokenReducer from "./tokenReducer";
import errorReducer from "./errorReducer";
export default combineReducers({userReducer,errorReducer,tokenReducer,storyReducer,draftReducer})