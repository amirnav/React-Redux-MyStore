

import { legacy_createStore as createStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";





const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))
export default store;