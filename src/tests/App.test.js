import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom'

describe("App", () => {

  beforeEach(() => {
    render(<BrowserRouter>
            <App />
          </BrowserRouter>);
  });

  it('renders without crashing ', () => {
    const element = screen.getByText(/Jobs/i);
    expect(element).toBeInTheDocument();
  });

});
