import { render, screen } from '@testing-library/react';
import TopBar from '../components/TopBar';

describe("TopBar", () => {

  beforeEach(() => {
    render(<TopBar />);
  });
  
  test('renders username', () => {
    const element = screen.getByText(/Julie Howard/i);
    expect(element).toBeInTheDocument();
  });

  test('renders role', () => {
    const element = screen.getByText(/Admin/i);
    expect(element).toBeInTheDocument();
  });
});