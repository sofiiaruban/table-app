'use client'
import React, { useRef } from 'react'
import { LoginFormValues } from '../types/LoginFormValues'
import { LoginProps } from '../types/LoginProps'

export default function Login({ setUserLogIn }: LoginProps) {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (usernameRef.current && passwordRef.current) {
      const usernameValue: string = usernameRef.current.value
      const passwordValue: string = passwordRef.current.value

      const formData: LoginFormValues = {
        username: usernameValue,
        password: passwordValue
      }

      try {
        const response = await fetch(
          'https://technical-task-api.icapgroupgmbh.com/api/login/',
          {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          }
        )

        if (response.status === 200) {
          setUserLogIn(true)
        } else {
          console.log('Login failed')
        }
      } catch (error) {
        console.error('An error occurred', error)
      }
    }
  }

  return (
    <div className="flex flex-col border rounded p-3 w-96">
      <h2 className="text-center font-bold mb-3">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          type="text"
          name="username"
          placeholder="Enter user name"
          ref={usernameRef}
          className="border rounded px-3 py-2 mb-3"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          ref={passwordRef}
          className="border rounded px-3 py-2 mb-3"
          required
        />
        <button
          type="submit"
          className="border bg-indigo-200 hover:bg-indigo-300 rounded px-3 py-2"
        >
          Log in
        </button>
      </form>
    </div>
  )
}
