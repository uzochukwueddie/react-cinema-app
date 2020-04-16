import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import '../grid/Grid.scss';
import './SearchResult.scss';
import Rating from '../rating/Rating';
import { IMAGE_URL } from '../../../services/movies.service';
import LazyImage from '../../lazy-image/LazyImage';

const SearchResult = (props) => {
  const { searchResult, searchQuery } = props;
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setMovieData(searchResult);
  }, [searchResult]);

  return (
    <div className="searchKeyword">
      <div className="grid-search-title">
        <span className="grid-text1">Your search keyword:</span> <span className="grid-text2">{searchQuery}</span>
      </div>
      <div className="grid">
        {movieData.map((data) => (
          <Fragment key={uuidv4()}>
            {data.poster_path && (
              <LazyImage className="grid-cell" src={`${IMAGE_URL}${data.poster_path}`} alt="placeholder">
                <div className="grid-read-more">
                  <button className="grid-cell-button">Read More</button>
                </div>
                <div className="grid-detail">
                  <span className="grid-detail-title">{data.title}</span>
                  <div className="grid-detail-rating">
                    <Rating rating={data.vote_average} totalStars={10} />
                    &nbsp;&nbsp;
                    <div className="grid-vote-average">{data.vote_average}</div>
                  </div>
                </div>
              </LazyImage>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  searchResult: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  searchResult: state.movies.searchResult,
  searchQuery: state.movies.searchQuery
});

export default connect(mapStateToProps, {})(SearchResult);
