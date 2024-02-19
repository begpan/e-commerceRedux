import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";
import { thunk } from "redux-thunk";

// REDUCELARI BİRLEŞTİR

const rootReducer = combineReducers({
  products: productReducer,
  basket: basketReducer,
});

// applyMiddleware fonk bşr arayazıımı reduxa dahil etemeye yarara
// thunk arayazılımını reduxa dahhil ettik
export default createStore(rootReducer, applyMiddleware(thunk));
