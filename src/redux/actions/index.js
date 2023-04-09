import axios from "axios";

const BASE_URL = "https://fakestoreapi.coM";

export const getItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_ITEMS_REQUEST", loading: true });
      const response = await axios.get(BASE_URL + "/products");
      dispatch({ type: "GET_ITEMS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_ITEMS_FAILURE", payload: error.message });
    }
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(BASE_URL + "/products/categories");
      dispatch({ type: "GET_CATEGORIES_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_CATEGORIES_FAILURE", payload: error.message });
    }
  };
};
