const initialState = {
    info: [], inputSearch:""
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "GET_INFOS":
        return {
          ...state,
          info: action.payload
        };
      default:
        return state;
    }
  } 