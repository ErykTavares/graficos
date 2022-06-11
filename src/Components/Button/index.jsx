import React from 'react'
import { ButtonStyle } from './style'

const Button = ({children, type, width, height}) => {
  return (
    <ButtonStyle type={type} width={width} height={height}>
      {children}
    </ButtonStyle>
  )
}

export default Button
