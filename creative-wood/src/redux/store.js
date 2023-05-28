import { legacy_createStore } from "redux";
import rootReducers from "./reducer/reducers";

const store = legacy_createStore(rootReducers);

export default store;