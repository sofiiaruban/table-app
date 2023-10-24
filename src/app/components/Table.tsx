import React from 'react'
import { TableProps } from '../types/TableProps'


export default function Table({list}: TableProps) {
  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Birthday date</th>
        <th>Phone number</th>
        <th>Address</th>
      </tr>
      {list.map((item) => (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.birthday_date}</td>
          <td>{item.phone_number}</td>
          <td>{item.address}</td>
        </tr>
      ))}
    </table>
  )
}
