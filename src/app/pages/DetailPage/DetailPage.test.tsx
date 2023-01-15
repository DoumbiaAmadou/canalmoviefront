import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailPage from './DetailPage';

describe('<DetailPage />', () => {
  test('it should mount', () => {
    render(<DetailPage />);
    
    const detailPage = screen.getByTestId('DetailPage');

    expect(detailPage).toBeInTheDocument();
  });
});