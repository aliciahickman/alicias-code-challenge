import React from 'react'
import styled from '@emotion/styled'
import { Theme } from '../css/Theme.js' 

const JobTable = ({jobs, handleEditClick}) => (
  <Table>
    <Thead>
      <Tr>
        <Th>Job Title</Th>
        <Th>Posted</Th>
        <Th>Sponsorship</Th>
        <Th>Status</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {jobs.map(job => (
        <Tr key={job.id}>
          <Td>{job.title}<Location>{job.location}</Location></Td>
          <Td>{job.date}</Td>
          <Td>{job.sponsorship}</Td>
          <Td>{job.status}</Td>
          <Td>
            <SecondaryButton
              onClick={() => {handleEditClick(job)}} >
              Edit
            </SecondaryButton>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
)

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 15px;
  width: 100%;
  margin-bottom: 4rem;
`
const Thead = styled.thead`
  line-height: 2px;
  color: ${Theme.graymed};
`
const Tbody = styled.tbody`
`
const Th = styled.th`
  font-family: ${Theme.Noto};
  &:first-of-type {
    padding-left: 20px;
    text-align: left;
  }
`
const Tr = styled.tr`
`
const Td = styled.td`
  background-color: white;
  padding: 20px;
  border-top: 1px solid ${Theme.borderColor};
  border-bottom: 1px solid ${Theme.borderColor};
  margin: 20px 0;
  text-align: center;
  text-transform: capitalize;
  &:first-of-type{
    text-align: left;
    border-radius: ${Theme.tableRadius} 0 0 ${Theme.tableRadius};
    border-left: 1px solid ${Theme.borderColor};
  }
  &:last-of-type {
    border-radius: 0 ${Theme.tableRadius} ${Theme.tableRadius} 0;
    border-right: 1px solid ${Theme.borderColor};
  }
`
const SecondaryButton = styled.button`
  padding: .8rem;
  color: ${Theme.blue};
  background: white;
  border: 1px solid ${Theme.graylight};
  font-weight: bold;
  border-radius: ${Theme.buttonRadius};
  cursor: pointer;
  float: right;
  &:hover {
    background-color: ${Theme.offwhite}
  }
  &:active {
    outline: 0;
    box-shadow: 0 0 0 1px ${Theme.blue};
  }
`
const Location = styled.p`
  margin: .35rem 0 0 0;
  color: ${Theme.graymed};
`
export default JobTable
