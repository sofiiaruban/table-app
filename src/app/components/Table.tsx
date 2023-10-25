import React from 'react'
import { TableProps } from '../types/TableProps'
import Link from 'next/link'


export default function Table({list}: TableProps) {
  return (
    <table className="table-fixed mb-3">
      <thead>
        <tr className="p-2">
          <th className="border p-2">Id</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Birthday date</th>
          <th className="border p-2">Phone number</th>
          <th className="border p-2">Address</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(list) ? (
          list.map((item) => (
            <Link href={`user/${item.id}`} key={item.id} className="p-2">
              <tr>
                <td className="border p-2">{item.id}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.email}</td>
                <td className="border p-2">{item.birthday_date}</td>
                <td className="border p-2">{item.phone_number}</td>
                <td className="border p-2">{item.address}</td>
              </tr>
            </Link>
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
