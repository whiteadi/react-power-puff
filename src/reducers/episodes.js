import { ADD_EPISODES } from "../actions/actionTypes";

const initialState = {
  episodes: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EPISODES: {
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
