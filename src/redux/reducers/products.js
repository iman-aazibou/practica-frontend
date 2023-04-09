const initialState = {
  items: [],
  loading: false,
  error: null,
  categories: [],
};

const getItems = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEMS_REQUEST":
      return { ...state, loading: true };
    case "GET_ITEMS_SUCCESS":
      return {
        ...state,
        items: action.payload,
        error: null,
        loading: false,
      };
    case "GET_ITEMS_FAILURE":
      return {
        ...state,
        items: [],
        error: action.payload,
        loading: false,
      };
    case "GET_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.payload,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default getItems;
