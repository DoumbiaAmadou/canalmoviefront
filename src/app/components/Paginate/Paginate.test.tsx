import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Paginate from './Paginate';

describe('<Paginate />', () => {
  test('it should mount', () => {
    render(<Paginate />);

    const paginate = screen.getByTestId('Paginate');

    expect(paginate).toBeInTheDocument();
  });
});