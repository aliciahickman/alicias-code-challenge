import React from 'react'
import styled from '@emotion/styled'
import { Theme } from '../css/Theme.js' 

const Select = ({label, note, options, value, onChange}) => (
  <>
    <Label>{label}</Label>
    <Note>{note}</Note>
    <Selector 
      value={value} 
      onChange={onChange}>
      {Object.keys(options).map((value, i) => (
        <option 
          value={options[value]} 
          key={i} >
            {options[value]}
        </option>
      ))}
    </Selector>
  </>
)

const Label = styled.label`
  font-family: 'Helvetica Neue';
  color: ${Theme.graydark};
  font-weight: bold;
`
const Note = styled.p`
  margin: .4rem 0;
  color: ${Theme.graymed};
  font-size: .875rem;
`
const Selector = styled.select`
  border: 1px solid ${Theme.graymed};
  border-radius: 8px;
  line-height: 1.2;
  padding: 10px;
  margin-bottom: 1.9rem;
  text-transform: capitalize;
  appearance: none;
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-11 -4 29 29'><path stroke='none' fill='inherit' d='M6 8l-1 1l5 5l5-5l-1-1l-4 4l-4-4z'/></svg>") no-repeat;
  background-position: right 10px top;
`

export default Select