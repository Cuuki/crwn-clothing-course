import {shallow} from 'enzyme';
import React from 'react';
import Directory from './Directory';

it('renders Directory component', () => {
  const mockSections = [
    {
      title: 'test',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/test',
    },
    {
      title: 'test 2',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 2,
      linkUrl: 'shop/test2',
    },
  ];

  expect(shallow(<Directory sections={mockSections} />)).toMatchSnapshot();
});
