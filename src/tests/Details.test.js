import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import Details from '../_pages/Details'

describe("Details", () => {
  
  describe("Add new", () => {
    beforeEach(() => {
      const currentJob = { 
        id: null, 
        title: '', 
        location: '',
        date: '',
        sponsorship: 'free',
        status: 'open'
      }
      render(
        <Details 
          isEditing={false}
          currentJob={currentJob}>
        </Details>
      );
    });

    it('renders correct heading', () => {
      
      const element = screen.getByText(/Add a new job/i)
      expect(element).toBeInTheDocument()
    });

    it('renders empty form', () => {
      const input1 = screen.getByLabelText(/Job title/i)
      expect(input1.value).toEqual('')

      const input2 = screen.getByLabelText(/Location/i)
      expect(input2.value).toEqual('')

      const input3 = screen.getByLabelText(/Sponsorship/i)
      expect(input3.value).toEqual('free')

      const input4 = screen.getByLabelText(/Status/i)
      expect(input4.value).toEqual('open')
    });
  });

  describe("Edit", () => {
    beforeEach(() => {
      const currentJob = { 
        id: 2, 
        title: 'CEO', 
        location: 'Austin, TX',
        date: '12/30/20',
        sponsorship: 'sponsored',
        status: 'paused'
      }
      render(
        <Details 
          isEditing={true}
          currentJob={currentJob}>
        </Details>
      );
    });

    it('renders correct heading', () => {
      const element = screen.getByText(/Edit job/i)
      expect(element).toBeInTheDocument()
    });

    it('renders a filled form', () => {
      const input1 = screen.getByLabelText(/Job title/i)
      expect(input1.value).toEqual('CEO')

      const input2 = screen.getByLabelText(/Location/i)
      expect(input2.value).toEqual('Austin, TX')

      const input3 = screen.getByLabelText(/Sponsorship/i)
      expect(input3.value).toEqual('sponsored')

      const input4 = screen.getByLabelText(/Status/i)
      expect(input4.value).toEqual('paused')
    });
  });

});
