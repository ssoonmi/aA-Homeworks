import React from 'react';

const GiphysIndexItem = ({giphyUrl}) => {
  return (
    <li>
      <img src={giphyUrl} /> 
    </li>
  );
};

export default GiphysIndexItem;
