import { ADD_EPISODE } from "../actions/actionTypes";

const initialState = {
  episode: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EPISODE: {
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
