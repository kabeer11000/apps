import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpandedCard from './ExpandedCard';

describe('<ExpandedCard />', () => {
  test('it should mount', () => {
    render(<ExpandedCard />);
    
    const expandedCard = screen.getByTestId('ExpandedCard');

    expect(expandedCard).toBeInTheDocument();
  });
});