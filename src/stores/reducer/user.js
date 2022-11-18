const initialState = {
  userData: {},
  allUser: {},
  isLoading: false,
  isError: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_USER_PENDING':
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
      };
    case 'GET_DATA_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_DATA_USER_FULFILLED':
      return {
        ...state,
        userData: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    case 'GET_DATA_USER_BY_ID_PENDING':
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
      };
    case 'GET_DATA_USER_BY_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_DATA_USER_BY_ID_FULFILLED':
      return {
        ...state,
        userData: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    case 'UPDATE_DATA_USER_PENDING':
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
      };
    case 'UPDATE_DATA_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'UPDATE_DATA_USER_FULFILLED':
      return {
        ...state,
        userData: action.payload.data.data,
        isLoading: false,
        isError: false,
      };

    case 'UPDATE_PASSWORD_USER_PENDING':
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
      };
    case 'UPDATE_PASSWORD_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'UPDATE_PASSWORD_USER_FULFILLED':
      return {
        ...state,
        userData: action.payload.data.data,
        isLoading: false,
        isError: false,
      };

    case 'UPDATE_IMAGE_USER_PENDING':
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
      };
    case 'UPDATE_IMAGE_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'UPDATE_IMAGE_USER_FULFILLED':
      return {
        ...state,
        userData: action.payload.data.data,
        isLoading: false,
        isError: false,
      };

    default: {
      return state;
    }
  }
};

export default user;
