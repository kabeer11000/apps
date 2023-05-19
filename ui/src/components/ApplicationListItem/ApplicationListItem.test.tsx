import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApplicationListItem from './ApplicationListItem';

describe('<ApplicationListItem />', () => {
  test('it should mount', () => {
    render(<ApplicationListItem />);
    
    const applicationListItem = screen.getByTestId('ApplicationListItem');

    expect(applicationListItem).toBeInTheDocument();
  });
});