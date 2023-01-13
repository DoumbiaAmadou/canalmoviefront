import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import R9Layout from './R9Layout';

describe('<R9Layout />', () => {
  test('it should mount', () => {
    render(<R9Layout />);
    
    const r9Layout = screen.getByTestId('R9Layout');

    expect(r9Layout).toBeInTheDocument();
  });
});