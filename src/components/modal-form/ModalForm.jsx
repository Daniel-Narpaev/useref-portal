// import React, { useState } from "react";
import Modal from "../UI/modal/Modal";
import Input from "../UI/input/Input";
import Button from "../UI/Button";
import styled from "styled-components";
import { useRef } from "react";

const ModalForm = ({ onShowModal, addMovie }) => {
  // const [title, setTitle] = useState("");
  // const [image, setImage] = useState("");
  // const [rating, setRating] = useState("");

  const textInput = useRef();
  const imageInput = useRef();
  const ratingInput = useRef();
  // const titleChangeHandler = (event) => {
  //   setTitle(event.target.value);
  // };
  // const imageChangeHandler = (event) => {
  //   setImage(event.target.value);
  // };
  // const ratingChangeHandler = (event) => {
  //   setRating(event.target.value);
  // };
  const submitHandler = (event) => {
    console.log(textInput.current.value);
    console.log(imageInput.current.value);
    console.log(ratingInput.current.value);
    event.preventDefault();
    const data = {
      id: Math.random().toString(),
      title: textInput.current.value,
      image: imageInput.current.value,
      rating: ratingInput.current.value,
    };
    addMovie(data);
    onShowModal();
  };
  return (
    <Modal onClose={onShowModal}>
      <InputBlock>
        <Input
          type="text"
          label="Movie Title"
          // value={title}
          // onChange={titleChangeHandler}
          ref={textInput}
        />
        <Input
          type="url"
          label="Image URL"
          // value={image}
          // onChange={imageChangeHandler}
          ref={imageInput}
        />
        <Input
          type="number"
          label="Your Rating"
          // value={rating}
          // onChange={ratingChangeHandler}
          ref={ratingInput}
        />
        <BtnBlock>
          <Button text="Cancel" onClick={onShowModal} />
          <Button text="Add" onClick={submitHandler} />
        </BtnBlock>
      </InputBlock>
    </Modal>
  );
};

export default ModalForm;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const BtnBlock = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
`;
