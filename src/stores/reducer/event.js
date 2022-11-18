const initialState = {
  eventData: [],
  allEvent: [],
  isLoading: false,
  isError: false,
};

const event = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_EVENT_PENDING':
      return {
        ...state,
        allEvent: [],
        isLoading: true,
        isError: false,
      };
    case 'GET_DATA_EVENT_REJECTED':
      return {
        ...state,
        allEvent: [],
        isLoading: false,
        isError: true,
      };
    case 'GET_DATA_EVENT_FULFILLED':
      return {
        ...state,
        allEvent: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    case 'GET_DATA_EVENT_BY_ID_PENDING':
      return {
        ...state,
        eventData: [],
        isLoading: true,
        isError: false,
      };
    case 'GET_DATA_EVENT_BY_ID_REJECTED':
      return {
        ...state,
        eventData: [],
        isLoading: false,
        isError: true,
      };
    case 'GET_DATA_EVENT_BY_ID_FULFILLED':
      return {
        ...state,
        eventData: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    case 'UPDATE_DATA_EVENT_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'UPDATE_DATA_EVENT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'UPDATE_DATA_EVENT_FULFILLED':
      return {
        ...state,
        eventData: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    case 'DELETE_DATA_EVENT_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'DELETE_DATA_EVENT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'DELETE_DATA_EVENT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export default event;
