import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useMediaPredicate } from 'react-media-hook';

import { useShow } from '../../api';
import EpisodeList from '../EpisodeList';

const Home = () => {
  const { show, isLoading, isError } = useShow();
  // used to see if we can use a larger image or not
  const checkIfMediumPlus = useMediaPredicate('(min-width: 800px)');

  if (isError) return <div>Something went wrong getting the show.</div>;

  return (
    <>
      {isLoading && <div>Loading ...</div>}
      {!isLoading && show && show.id && (
        <div className="wrapper">
          <div className="main_card">
            <div className="card_left">
              <div className="card_details">
                <h1>{show.name}</h1>
                <div className="card_cat">
                  <p className="genre">
                    {show.genres.map((genre) => (
                      <li key={genre}>{genre}</li>
                    ))}
                  </p>
                </div>
                <span className="disc">{ReactHtmlParser(show.summary)}</span>
                {show.externals?.imdb && (
                  <a
                    href={`https://www.imdb.com/title/${show.externals.imdb}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                )}
              </div>
            </div>
            <div className="card_right">
              <div className="img_container">
                <img
                  src={
                    checkIfMediumPlus
                      ? show.image?.original
                        ? show.image?.original
                        : show.image.medium
                      : show.image.medium
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="card_cat">
              <span className="genre scroll">
                <EpisodeList />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
