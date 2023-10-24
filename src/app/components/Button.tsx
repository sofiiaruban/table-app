import React from 'react'
import { ButtonProps } from '../types/ButtonsProps'

export default function Button({ title, handleClick }: ButtonProps) {
  return <button onClick={handleClick}>{title}</button>
}