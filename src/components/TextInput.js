import React from 'react'
import styled from '@emotion/styled'
import { Theme } from '../css/Theme.js' 

const TextInput = ({label, note, value, placeholder, onChange}) => (
  <>
    <Label htmlFor={label}>{label}</Label>
    <Note>{note}</Note>
    <Input 
      id={label}
      type="text"
      value={value} 
      placeholder={placeholder}
      onChange={onChange} />
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
const Input = styled.input`
  border: 1px solid ${Theme.graymed};
  border-radius: 8px;
  line-height: 1.2;
  padding: 10px;
  &::placeholder {
    color: ${Theme.graymed};
    overflow:visible;
  }
  margin-bottom: 1.9rem;
`

export default TextInput