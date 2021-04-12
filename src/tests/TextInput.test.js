import React, { useState } from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from '../components/TextInput';

describe("TextInput", () => {
  let testInput = null;
  const handleChange = (name, value) => {
    testInput = value;
  }
  
  beforeEach(() => {
    render(<TextInput 
      label="my label" 
      note="a longer note description"
      value="some value"
      placeholder="the placeholder"
      onChange={e => handleChange('test', e.target.value)}>
    </TextInput>);
  });
  
  test('renders label', () => {
    const element = screen.getByText(/my label/i);
    expect(element).toBeInTheDocument();
  });

  test('renders note', () => {
    const element = screen.getByText(/a longer note description/i);
    expect(element).toBeInTheDocument();
  });

  test('onChange works as expected', () => {
    const input = screen.getByLabelText(/my label/i);
    fireEvent.change(input, { target: { value: 'fruit' } })
    expect(testInput).toBe('fruit')
  })
});