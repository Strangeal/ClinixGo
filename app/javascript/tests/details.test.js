// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Details from '../components/Details';

describe('Details', () => {
  it('should render Details Page', () => {
    const tree = render(
      <BrowserRouter>
        <Details />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
