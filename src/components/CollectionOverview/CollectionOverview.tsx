import React from 'react';

import Collection from '../Collection';

import './CollectionOverview.scss';

const CollectionOverview = ({collections}) => (
  <div className="collection-overview">
    {collections.map(({id, ...otherProps}) => (
      <Collection key={id} {...otherProps} perPage="4" />
    ))}
  </div>
);

export default CollectionOverview;
