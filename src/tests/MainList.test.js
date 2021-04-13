import { render, screen, fireEvent } from '@testing-library/react';
import MainList from '../_pages/Mainlist';

describe("Mainlist", () => {
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
  const handleAddClick = jest.fn()

  beforeEach(() => {
    render(<MainList 
        jobs={jobs} 
        handleEditClick={handleEditClick} 
        handleAddClick={handleAddClick}
        />
        );
  });
  
  it('renders job count', () => {
    const element = screen.getByText(/3 listings/i)
    expect(element).toBeInTheDocument()
  });

  it('calls handleEditClick prop when clicked', () => {
    const button = screen.getAllByText(/Edit/i)
		fireEvent.click(button[0])
		expect(handleEditClick).toHaveBeenCalledTimes(1)
  })

  it('calls handleAddClick prop when clicked', () => {
    const button = screen.getByText(/Add job/i)
		fireEvent.click(button)
		expect(handleAddClick).toHaveBeenCalledTimes(1)
  })
});