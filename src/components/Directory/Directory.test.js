import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {render} from "@testing-library/react";
import Directory from './Directory';

describe('Directory', () => {
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

    expect(render(
      <Directory sections={mockSections}/>,
      {wrapper: MemoryRouter})
    ).toMatchSnapshot();
  });
})
