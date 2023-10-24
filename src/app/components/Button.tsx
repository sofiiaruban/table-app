import React from 'react'
import { ButtonProps } from '../types/ButtonsProps'

export default function Button({ title, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="border rounded bg-purple-100 hover:bg-purple-200 px-3 py-2"
    >
      {title}
    </button>
  )
}