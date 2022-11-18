const initialState = {
  wishlistData: [],
  isLoading: false,
  isError: false,
};

const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_WISHLIST_BY_USER_ID_PENDING':
      return {
        ...state,
        wishlistData: [],
        isLoading: true,
        isError: false,
      };
    case 'GET_DATA_WISHLIST_BY_USER_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_DATA_WISHLIST_BY_USER_ID_FULFILLED':
      return {
        ...state,
        wishlistData: action.payload.data.data,
        isLoading: false,
        isError: false,
      };

    case 'DELETE_WISHLIST_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'DELETE_WISHLIST_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'DELETE_WISHLIST_FULFILLED':
      return {
        ...state,
        wishlistData: action.payload.data.data,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export default wishlist;
