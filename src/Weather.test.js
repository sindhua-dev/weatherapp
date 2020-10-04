import React from 'react';
import { render } from '@testing-library/react';
import CoreClass from './Weather';
test('renders weather app page', () => {
  const { getByText } = render(<CoreClass />);
  const headingTest = getByText(/My Weather App/i);
  const buttonTest = getByText(/Submit/i);
  const cityTest = getByText(/city/i);
  const tempTest = getByText(/Temperature/);
//  console.log ( tempTest );
  expect(headingTest).toBeInTheDocument();
  expect(buttonTest).toBeInTheDocument();
  expect(cityTest).toBeInTheDocument();
  expect(tempTest).toBeInTheDocument();
});




