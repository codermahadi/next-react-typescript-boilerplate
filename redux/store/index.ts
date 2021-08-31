import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "../reducers";

const store = createStore(rootReducers, {}, composeWithDevTools(applyMiddleware(thunk)));
export type RootStore = ReturnType<typeof rootReducers>;
export default store;