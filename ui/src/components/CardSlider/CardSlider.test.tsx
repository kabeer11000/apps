import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardSlider from './CardSlider';

describe('<CardSlider />', () => {
  test('it should mount', () => {
    render(<CardSlider />);
    
    const cardSlider = screen.getByTestId('CardSlider');

    expect(cardSlider).toBeInTheDocument();
  });
});