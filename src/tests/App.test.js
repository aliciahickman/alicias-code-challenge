import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom'

describe("App", () => {

  beforeEach(() => {
    render(<BrowserRouter><App /></BrowserRouter>);
  });

  test('App renders Add job button', () => {
    const buttonElement = screen.getByText(/Add job/i);
    expect(buttonElement).toBeInTheDocument();
  });
});