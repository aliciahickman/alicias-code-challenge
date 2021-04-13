import React from 'react'
import styled from '@emotion/styled'
import { Theme } from '../css/Theme.js' 

const TopBar = () => (
  <Bar>
    <ProfileWrapper>
      <ProfilePic></ProfilePic>
      <div>
        <UserName>Julie Howard</UserName>
        <UserRole>Admin</UserRole>
      </div>
    </ProfileWrapper>
  </Bar>
)

const Bar = styled.div`
  height: 65px;
  background-color: ${Theme.graydark};
  margin-bottom: 4rem;
`
const ProfilePic = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 35px;
  background-color: ${Theme.graylight};
  margin-right: .25rem;
`
const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  & p {
    color: white;
    margin: .3rem;
  }
  max-width: ${Theme.wrapperMaxWidth};
	margin: ${Theme.wrapperMargin};
	width: ${Theme.wrapperWidth};
`
const UserName = styled.p`
  font-weight: bold;
  font-family: 'Helvetica Neue';
`
const UserRole = styled.p`
  font-size: .675rem;
`
export default TopBar