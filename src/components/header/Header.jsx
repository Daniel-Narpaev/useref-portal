import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
const Header = ({onShowModal}) => {
  return (
    <StyledHeader>
       <h2>Favourite Movies</h2>
       <Button onClick={onShowModal} text="ADD"/>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.div`
    height: 70px;
    background-color: rgb(24, 0, 241);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;
    color: white;
    font-size: 1.4rem;
`