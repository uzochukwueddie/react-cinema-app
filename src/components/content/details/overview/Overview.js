import React, { useState, useEffect } from 'react';

import './Overview.scss';

const Overview = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const detailItems = [
      {
        id: 0,
        name: 'Tagline',
        value: 'Part of the journey is the end'
      },
      {
        id: 1,
        name: 'Budget',
        value: `${numberFormatter(356000000, 1)}`
      },
      {
        id: 2,
        name: 'Revenue',
        value: `${numberFormatter(2800000000, 1)}`
      },
      {
        id: 3,
        name: 'Status',
        value: 'Released'
      },
      {
        id: 4,
        name: 'Release Date',
        value: '2019-04-24'
      },
      {
        id: 5,
        name: 'Run Time',
        value: '181 min'
      }
    ];
    setItems(detailItems);

    // eslint-disable-next-line
  }, []);

  const numberFormatter = (number, digits) => {
    const symbolArray = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'K' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'B' }
    ];
    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let result = '';

    for (let i = 0; i < symbolArray.length; i++) {
      if (number >= symbolArray[i].value) {
        result = (number / symbolArray[i].value).toFixed(digits).replace(regex, '$1') + symbolArray[i].symbol;
      }
    }
    return result;
  };

  return (
    <div className="overview">
      <div className="overview-column-1">
        <div className="description">This is a description about the movie</div>

        <div className="cast">
          <div className="div-title">Cast</div>
          <table>
            <tbody>
              <tr>
                <td>
                  <img src="http://placehold.it/54x81" alt="" />
                </td>
                <td>Robert Downing Jr.</td>
                <td>Iron Man</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="overview-column-2">
        <div className="overview-detail">
          <h6>Production Companies</h6>
          <div className="product-company">
            <img src="http://placehold.it/30x30" alt="" />
            <span>Marvel</span>
          </div>
        </div>
        <div className="overview-detail">
          <h6>Language(s)</h6>
          <p>
            <a href="!#">English</a>
          </p>
        </div>
        {items.map((data) => (
          <div className="overview-detail" key={data.id}>
            <h6>{data.name}</h6>
            <p>
              <a href="!#">{data.value}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
