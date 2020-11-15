import React from 'react';

import Directory from '../../components/Directory';

import {HomePageStyled} from './HomePage.styles';

const HomePage = () => (
  <HomePageStyled>
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </HomePageStyled>
);

export default HomePage;
