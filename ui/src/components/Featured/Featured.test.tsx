import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Featured from './Featured';

describe('<Featured />', () => {
  test('it should mount', () => {
    render(<Featured />);
    
    const featured = screen.getByTestId('Featured');

    expect(featured).toBeInTheDocument();
  });
});