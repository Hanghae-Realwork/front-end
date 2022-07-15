import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

// middlewares
import thunk from "redux-thunk";
import logger from "redux-logger";
import user from "./modules/user";
import postRecruit from "./modules/postRecruit";
import postEmploy from "./modules/postEmploy";
import postProfile from "./modules/postProfile";
const rootReducer = combineReducers({
  user,
  postRecruit,
  postEmploy,
  postProfile
});

// logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
const middlewares = [thunk, logger];

const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
