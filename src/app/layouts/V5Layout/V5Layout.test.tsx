import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import V5Layout from './V5Layout';

describe('<V5Layout />', () => {
  test('it should mount', () => {
    render(<V5Layout />);
    
    const v5Layout = screen.getByTestId('V5Layout');

    expect(v5Layout).toBeInTheDocument();
  });
});