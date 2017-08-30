import { applyMiddleware, createStore } from "redux";
import modules from "./modules";
import penderMiddleware from 'redux-pender';
import logger from "redux-logger";

const middlewares = [penderMiddleware()];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;