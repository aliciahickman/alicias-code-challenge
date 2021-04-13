import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../components/Select';

describe("TextInput", () => {
  let testInput = null;
  const handleChange = (name, value) => {
    testInput = value;
  }
  
  beforeEach(() => {
    render(<Select 
      label="my label" 
      note="a longer note description"
      options={{value1:'free', value2:'sponsored'}}
      value="free"
      placeholder="the placeholder"
      onChange={e => handleChange('test', e.target.value)}>
    </Select>);
  });
  
  it('renders label', () => {
    const element = screen.getByText(/my label/i);
    expect(element).toBeInTheDocument();
  });

  it('renders note', () => {
    const element = screen.getByText(/a longer note description/i);
    expect(element).toBeInTheDocument();
  });

  it('onChange works as expected', () => {
    const input = screen.getByLabelText(/my label/i);
    fireEvent.change(input, { target: { value: 'sponsored' } })
    expect(testInput).toBe('sponsored')
  })
});