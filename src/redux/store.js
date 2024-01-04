

import { legacy_createStore as createStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

const store= createStore(rootReducer,applyMiddleware(logger))
export default store;