import React from 'react';

import DirectoryItem from '../DirectoryItem';

import './Directory.scss';

const Directory = ({sections}) => (
  <div className="directory">
    {sections.map(({id, ...otherProps}) => {
      return <DirectoryItem key={id} {...otherProps} />;
    })}
  </div>
);

export default Directory;
