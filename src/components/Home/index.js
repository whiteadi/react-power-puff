import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useShow } from '../../api';
import EpisodeList from '../EpisodeList';

const Home = () => {
  const { show, isLoading, isError } = useShow();

  if (isError) return <div>Something went wrong ...</div>;

  return (
    <>
      {isLoading && <div>Loading ...</div>}
      {!isLoading && show && show.id && (
        <div className="wrapper">
          <div className="main_card">
            <div className="card_left">
              <div className="card_datails">
                <h1>{show.name}</h1>
                <div className="card_cat">
                  <p className="genre">
                    {show.genres.map((genre) => (
                      <li key={genre}>{genre}</li>
                    ))}
                  </p>
                </div>
                <span className="disc">{ReactHtmlParser(show.summary)}</span>
                <a
                  href={`https://www.imdb.com/title/${show.externals.imdb}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="card_right">
              <div className="img_container">
                <img src={show.image.medium} alt="" />
              </div>
            </div>
            <div className="card_cat">
              <span className="genre">
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
