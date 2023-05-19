import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpandedCardSlider from './ExpandedCardSlider';

describe('<ExpandedCardSlider />', () => {
  test('it should mount', () => {
    render(<ExpandedCardSlider />);
    
    const expandedCardSlider = screen.getByTestId('ExpandedCardSlider');

    expect(expandedCardSlider).toBeInTheDocument();
  });
});