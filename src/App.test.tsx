import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const prompt = screen.getByText(/Enter a GitHub repository URL/i);
  expect(prompt).toBeInTheDocument();
});
