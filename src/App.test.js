import { render, screen } from '@testing-library/react';
import App from './App';

test('Copyright is present in the App', () => {
  render(<App />);
  expect(screen.getByText(/Copyright 2021/i)).toBeInTheDocument();
});
