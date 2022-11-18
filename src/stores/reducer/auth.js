const initialState = {
  userData: [],
  isLoading: false,
  isError: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'SIGNUP_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'SIGNUP_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    case 'LOGIN_PENDING':
      return {
        ...state,
        userData: [],
        isLoading: true,
        isError: false,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        userData: [],
        isLoading: false,
        isError: true,
      };
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        userData: action.payload.data.data,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export default auth;
