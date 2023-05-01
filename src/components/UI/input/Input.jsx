import React from 'react'
import { forwardRef } from 'react'
import styled from 'styled-components'
const Input = forwardRef(({ label, onChange, value, type }, ref) => {
  return (
    <Form>
        <Label>{label}</Label>
        <StyledInput ref={ref} type={type}  onChange={onChange} value={value} className='inp' />
    </Form>
  )
})

export default Input

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`
const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    font-size: 1.5rem;
`
const Label = styled.label`
    font-size: 1.4rem;
    font-weight: bold;
    margin-left: 10px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`