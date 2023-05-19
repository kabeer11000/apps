import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApplicationCard from './ApplicationCard';

describe('<ApplicationCard />', () => {
  test('it should mount', () => {
    render(<ApplicationCard />);
    
    const applicationCard = screen.getByTestId('ApplicationCard');

    expect(applicationCard).toBeInTheDocument();
  });
});