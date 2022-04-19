import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import App from "../App";
import { postReducer } from "./reducers/reducer";


export const rootRedcuer  = combineReducers({
    cat: postReducer
})

export const store = createStore(rootRedcuer, applyMiddleware(thunk))