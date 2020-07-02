import { ADD_SHOW } from "./actionTypes";

export const addShow = content => ({
  type: ADD_SHOW,
  payload: {
    content
  }
});

