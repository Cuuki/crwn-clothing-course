import React from 'react';

import classNames from 'classnames';

import {withRouter} from 'react-router-dom';

import './DirectoryItem.scss';

const DirectoryItem = ({title, linkUrl, imageUrl, size, history, match}) => (
  <div
    className={classNames('directory-item', size)}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(DirectoryItem);
