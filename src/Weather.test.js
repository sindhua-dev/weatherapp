import React from 'react';
import { render } from '@testing-library/react';
import CoreClass from './Weather';

test('renders learn react link', () => {
  const { getByText } = render(<coreFn />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
