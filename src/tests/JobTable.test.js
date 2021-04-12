import { render, screen } from '@testing-library/react';
import JobTable from '../components/JobTable';

describe("JobTable", () => {
  const jobs = [
		{ 
			id: 1, 
			title: 'Product Manager', 
			location: 'Austin, TX',
			date: '10/04/20',
			sponsorship: 'free',
			status: 'open'
		},
		{ 
			id: 2, 
			title: 'CEO', 
			location: 'Austin, TX',
			date: '12/30/20',
			sponsorship: 'sponsored',
			status: 'paused'
		},
		{ 
			id: 3, 
			title: 'Software Engineer', 
			location: 'Seattle, WA',
			date: '11/18/20',
			sponsorship: 'free',
			status: 'closed' 
		},
	]
  beforeEach(() => {
    render(<JobTable jobs={jobs}/>);
  });
  
  test('renders column name', () => {
    const element = screen.getByText(/Job title/i);
    expect(element).toBeInTheDocument();
  });

  test('renders 3 edit buttons', () => {
    const element = screen.getAllByText(/Edit/i);
    expect(element.length).toBe(3);
  });
});