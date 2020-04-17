import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Media.scss';
import { IMAGE_URL } from '../../../../services/movies.service';

const Media = (props) => {
  const { movie } = props;
  const [media] = useState(movie[2]);
  const [videos] = useState(movie[3]);

  return (
    <>
      <div className="media">
        <div>
          <div className="media-title">Watch Trailer</div>
          <div className="media-videos">
            {videos.results.map((data) => (
              <div className="video" key={data.key}>
                <iframe
                  title="Avengers"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  src={`https://www.youtube.com/embed/${data.key}`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="media-title">Photos ({media.posters.length})</div>
          <div className="media-images">
            {media.posters.map((data, i) => (
              <div
                key={i}
                className="image-cell"
                style={{
                  backgroundImage: `url(${IMAGE_URL}${data.file_path})`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Media.propTypes = {
  movie: PropTypes.array
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie
});

export default connect(mapStateToProps, {})(Media);
