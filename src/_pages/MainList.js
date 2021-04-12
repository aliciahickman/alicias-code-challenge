import React from 'react'
import { useHistory } from "react-router-dom";
import styled from '@emotion/styled'
import { Theme } from '../css/Theme.js' 
import JobTable from '../components/JobTable'

const MainList = ({jobs, editRow, setEditing}) => {
  const history = useHistory()
  
  const handleAddClick = () => {
		setEditing(false)
		history.push("/details")
  }

  return (
  <>
    <TableHeader>
      <Title>Jobs</Title>
      <Count>{jobs.length} listings</Count>
          <PrimaryButton onClick={handleAddClick}>Add job</PrimaryButton>
    </TableHeader>
    <JobTable jobs={jobs} editRow={editRow} />
  </>
  )
}

const TableHeader = styled.div`
  font-family: ${Theme.Noto};
  display: flex;
  width: 100%;
  align-items: baseline;
  margin: 0 0 2rem;
`
const Title = styled.h1`
  margin: 0 .75rem 0 0;
  font-size: 1.75rem;
`
const Count = styled.p`
  color: ${Theme.graymed};
  margin: 0;
  font-size: .875rem;
`
const PrimaryButton = styled.button`
  border: 0;
  border-radius: 8px;
  background: ${Theme.blue};
  color: white;
  padding: .875rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: auto;
  &:hover {
    background-color: ${Theme.bluedark}
  }
  &:active {
    outline: 0;
    box-shadow: 0 0 0 1px ${Theme.blue};
  }
`

export default MainList