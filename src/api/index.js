import { useEffect, useState, useCallback } from 'react';

import { API_URL, SHOW_ID } from '../constants';

// custom hook used to fetch the show data
export const useShow = () => {
  const [show, setShow] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const urlString = `${API_URL}/shows/${SHOW_ID}`;
      const url = new URL(urlString);
      let response = await fetch(url, {
        method: 'GET',
      });
      let data = await response.json();
      setShow(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { show, isLoading, isError };
};

// custom hook used to fetch the show episode list data
export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const urlString = `${API_URL}/shows/${SHOW_ID}/episodes?specials=1`;
      const url = new URL(urlString);
      let response = await fetch(url, {
        method: 'GET',
      });
      let data = await response.json();
      setEpisodes(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { episodes, isLoading, isError };
};

// custom hook used to fetch the single episode data
export const useEpisode = (episodeId) => {
  const [episode, setEpisode] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const urlString = `${API_URL}/episodes/${episodeId}`;
      const url = new URL(urlString);
      let response = await fetch(url, {
        method: 'GET',
      });
      let data = await response.json();
      setEpisode(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, [episodeId]);

  useEffect(() => {
    fetchData();
  }, [episodeId, fetchData]);

  return { episode, isLoading, isError };
};
