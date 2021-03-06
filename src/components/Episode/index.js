import React from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { useMediaPredicate } from 'react-media-hook';

import { useEpisode } from '../../api';

const Episode = () => {
  let { episodeId } = useParams();
  const { episode, isLoading, isError } = useEpisode(episodeId);
  const checkIfMediumPlus = useMediaPredicate('(min-width: 800px)');

  if (isError) return <div>Something went wrong fetching the episode.</div>;

  return (
    <>
      {isLoading && <div>Loading ...</div>}
      {!isLoading && episode && episode.id && (
        <div className="wrapper">
          <div className="main_card">
            <div className="card_left">
              <div className="card_details">
                <h1>{episode.name}</h1>
                <span className="disc">{ReactHtmlParser(episode.summary)}</span>
              </div>
              <div className="card_right">
                <div className="img_container">
                  <img
                    src={
                      checkIfMediumPlus
                        ? episode.image?.original
                          ? episode.image?.original
                          : episode.image?.medium
                        : episode.image?.medium
                    }
                    alt={episode.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Episode;
