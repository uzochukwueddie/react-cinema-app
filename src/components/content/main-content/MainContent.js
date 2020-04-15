import React, { useState } from 'react';

import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';

const MainContent = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 5.5
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 7.8
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 9.7
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 6.5
    },
    {
      url: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 5.5
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 7.8
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 9.7
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 6.5
    },
    {
      url: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 5.5
    },
    {
      url: 'https://images.pexels.com/photos/688574/pexels-photo-688574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 7.8
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 9.7
    },
    {
      url: 'https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 6.5
    },
    {
      url: 'https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid images={images} />
    </div>
  );
};

export default MainContent;
