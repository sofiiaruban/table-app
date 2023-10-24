import React from 'react'
import { TableProps } from '../types/TableProps'


export default function Table({list}: TableProps) {
  return (
    <table className="table-fixed">
      <thead>
        <tr className="p-2">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Birthday date</th>
          <th>Phone number</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(list) ? (
          list.map((item) => (
            <tr className="p-2">
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.email}</td>
              <td className="p-2">{item.birthday_date}</td>
              <td className="p-2">{item.phone_number}</td>
              <td className="p-2">{item.address}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
