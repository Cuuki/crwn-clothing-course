import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../selectors/directorySelectors';

import DirectoryItem from '../DirectoryItem';

import './Directory.scss';

const Directory = ({sections}) => (
  <div className="directory">
    {sections.map(({id, ...otherProps}) => {
      return <DirectoryItem key={id} {...otherProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
