import React from 'react';

import Collection from '../../components/Collection';

import './CollectionPage.scss';

const CollectionPage = ({collection}) => {
  const {id, ...otherProps} = collection;

  return (
    <div className="collection-page">
      <Collection key={id} {...otherProps} />
    </div>
  );
};

export default CollectionPage;
