'use client'
import React, { useRef, useState } from 'react'
import { LoginFormValues } from '../types/LoginFormValues'
import { useRouter } from 'next/navigation'
import Button from './Button';

export default function Login() {
  const navigate = useRouter();
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const LOGIN_URL = 'https://technical-task-api.icapgroupgmbh.com/api/login/'
  const [error, setError] = useState<boolean>(false)

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
        const response = await fetch(LOGIN_URL, {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })

        if (response.status === 200) {
            navigate.push('/home')
        } else {
          console.log('Login failed')
          setError(true)
        }
      } catch (error) {
        console.error('An error occurred', error)
        setError(true)
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
        {error ? <p className="mb-3 text-rose-400">Oops... Try again</p> : null}
        <Button title="Log in" />
      </form>
    </div>
  )
}
