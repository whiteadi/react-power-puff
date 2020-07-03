import { ADD_SHOW, ADD_EPISODE, ADD_EPISODES } from './actionTypes';

export const addShow = (content) => ({
  type: ADD_SHOW,
  payload: {
    content,
  },
});

export const addEpisodes = (content) => ({
  type: ADD_EPISODES,
  payload: {
    content,
  },
});

export const addEpisode = (content) => ({
  type: ADD_EPISODE,
  payload: {
    content,
  },
});
