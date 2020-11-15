import React from 'react';

import {withRouter, Link} from 'react-router-dom';
import Button from '../UI/Button';
import CollectionItem from '../CollectionItem';

import './Collection.scss';

const Collection = ({title, routeName, items, perPage = Infinity, match}) => (
  <div className="collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < perPage)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}

      {perPage !== Infinity && (
        <Button
          className="load-more"
          as={Link}
          to={`${match.path}/${routeName}`}>
          More
        </Button>
      )}
    </div>
  </div>
);

export default withRouter(Collection);
