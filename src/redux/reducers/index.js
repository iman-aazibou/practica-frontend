import products from "./products";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  products: products,
});

export default allReducers;
