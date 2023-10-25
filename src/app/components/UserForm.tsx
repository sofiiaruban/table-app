'use client'
import React, { ChangeEvent, useEffect } from 'react'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Button from '../components/Button'
import { UserFormProps } from '../types/UserFormProps'

export default function UserForm({ editMode }: UserFormProps) {
  const params = useParams()
  const id = params.id
  const URL = 'https://technical-task-api.icapgroupgmbh.com/api/table'
  const navigate= useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthday_date: '',
    phone_number: '',
    address: ''
  })
 function transformDate(inputDate: string) {
   const [day, month, year] = inputDate.split('-')

   const transformedDate = `20${year}-${month}-${day}`

   return transformedDate
 }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const name = event.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const requestOptions = {
      method: editMode ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }

    const apiUrl = editMode ? `${URL}/${id}/` : `${URL}/`

    try {
      const response = await fetch(apiUrl, requestOptions)

      if (response.status === 200 || response.status === 201) {
        console.log('Request succeeded:', response)
        navigate.push('/home')
      } else {
        console.error('Request failed:', response)
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

// its forbidden
  const handleDelete = async () => {
    if (id) {
      const deleteUrl = `${URL}/${id}/`
      try {
        const response = await fetch(deleteUrl, {
          method: 'DELETE'
        })
 
        if (response.status === 204) {
          console.log('Item deleted successfully')
          navigate.push('/home')
        } else {
          console.error('Delete request failed:', response)
        }
      } catch (error) {
        console.error('An error occurred while deleting:', error)
      }
    }
  }

  useEffect(() => {
    if (editMode) {
      const fetchData = async () => {
        try {
          const response = await fetch(`${URL}/${id}`)
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`)
          }
          const data = await response.json()
          const transformedDate = transformDate(data.birthday_date)
          data.birthday_date = transformedDate
          setFormData(data)
          console.log(data.birthday_date)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }

      fetchData()
    }
  }, [editMode, id])
  
  return (
    <div className="flex flex-col border rounded p-3 w-96">
      <h2 className="text-center font-bold mb-3">
        {editMode ? 'Update user' : 'Add user'}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name || ''}
          required
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email || ''}
          required
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />
        <input
          type="date"
          name="birthday_date"
          value={formData.birthday_date || ''}
          required
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone_number"
          pattern="^(\+380|0)[0-9]{9}$"
          placeholder="Enter your phone number"
          value={formData.phone_number || ''}
          required
          className="border p-2 w-full mb-3"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address || ''}
          required
          className="border p-2 w-full"
          onChange={handleChange}
        />
        <div
          className={`flex ${
            editMode ? 'justify-between' : 'justify-end'
          } pt-3`}
        >
          {editMode ? (
            <Button
              title="Delete user"
              type="button"
              handleClick={handleDelete}
            />
          ) : null}
          <Button title={editMode ? 'Update user' : 'Add user'} />
        </div>
      </form>
    </div>
  )
}


