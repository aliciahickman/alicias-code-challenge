import { render, screen, fireEvent } from '@testing-library/react';
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
	const handleEditClick = jest.fn()

  beforeEach(() => {
    render(<JobTable jobs={jobs} handleEditClick={handleEditClick}/>)
  });
  
  it('renders column name', () => {
    const element = screen.getByText(/Job title/i)
    expect(element).toBeInTheDocument()
  });

  it('renders 1 edit button for each job', () => {
    const element = screen.getAllByText(/Edit/i)
    expect(element.length).toBe(3)
	});
	
	it('calls handleEditClick prop when clicked', () => {
    const button = screen.getAllByText(/Edit/i)
		fireEvent.click(button[0])
		expect(handleEditClick).toHaveBeenCalledTimes(1)
  })
});