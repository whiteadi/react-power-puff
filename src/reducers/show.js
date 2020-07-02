import { ADD_SHOW } from "../actions/actionTypes";

const initialState = {
  show: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SHOW: {
      const { content } = action.payload;
      return {
        ...state,
        ...content
      };
    }
    default:
      return state;
  }
}
