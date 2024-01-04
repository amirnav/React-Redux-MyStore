
import { legacy_createStore as createStore} from "@reduxjs/toolkit"
import fruitReducer from "./fruit/fruitReducer"

const store= createStore(fruitReducer)
export default store;