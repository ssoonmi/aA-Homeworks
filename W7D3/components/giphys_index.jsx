import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ({giphys}) => {
  const items = giphys.map((giphy, idx) => {
    return (<GiphysIndexItem key={idx} giphyUrl={giphy.images.fixed_height.url} />);
  });
  return (
    <ul>
      {items}
    </ul>
  );
};

export default GiphysIndex;
