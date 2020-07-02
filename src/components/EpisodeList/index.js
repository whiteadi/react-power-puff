import React from 'react';
import { Link } from 'react-router-dom';
import { useEpisodes } from '../../api';

const EpisodeList = () => {
  const { episodes, isLoading, isError } = useEpisodes();

  if (isError) return <div>Something went wrong ...</div>;

  return (
    <>
      {isLoading && <div>Loading ...</div>}
      {!isLoading && episodes && episodes.length > 0 && (
        <div>
          <h1>Episodes:</h1>
          {episodes.map((episode) => (
            <li key={episode.id}>
              <Link to={`/${episode.id}`}>{episode.name}</Link>
            </li>
          ))}
        </div>
      )}
    </>
  );
};

export default EpisodeList;
