import React, { useState } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import Modal from '../UI/modal/Modal';
const Content = ({title, image, rating, deleteHandler, id}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const deleteModalHandler = () => {
    setShowDeleteModal(true)
  }
  const yesDeleteHandler = (id) => {
    deleteHandler(id)
    setShowDeleteModal(false)
  }
  const noDeleteHandler = () => {
    setShowDeleteModal(false)
  }
  
  return (
    <StyledContent>
      <Picture  src={image} alt="jijgb" className='picture'/>
        <Block>
            <Title>{title}</Title>
            <BtnBlock>
                <Rating>{rating}/5 stars</Rating>
                <Button text="EDIT"/>
                <Button text="Delete" onClick={()=>deleteModalHandler()}/>
                {showDeleteModal && 
                  <Modal onClose={()=>noDeleteHandler()}>
                    <>
                       <Title>are sure you wonna delete?</Title>
                       <ModalBtn>
                       <Button text="No" onClick={()=>noDeleteHandler()} />
                       <Button text="Yes" onClick={()=>yesDeleteHandler(id)} />
                       </ModalBtn>
                    </>
                  </Modal>}
            </BtnBlock>
        </Block>
    </StyledContent>
  )
}

export default Content

const StyledContent = styled.div`
    width: 550px;
    height: 230px;
    display: flex;
    border-radius: 20px;
    margin-left: 30%;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 5px rgb(122, 121, 121);
`
const Picture = styled.img`
    border-radius: 15px 0px 0px 15px;
    width: 40%;
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Title = styled.p`
    margin-top: 30px;
    margin-left: 15px;
    font-size: 1.5rem;
    font-weight: bold;
`
const Rating = styled.span`
    background-color: orange;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
    margin: 15px;
`
const BtnBlock = styled.div`
    margin-top: 30px;
`
const ModalBtn = styled.div`
    display: flex;
    justify-content: flex-end;
`
