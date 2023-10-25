'use client'
import React, { useEffect, useState } from 'react'
import Login from './components/Login';
import {useRouter} from 'next/navigation'

export default function Auth() {
  const [isUserLogin, setUserLogIn] = useState<boolean>(false);
  const navigate= useRouter();

  useEffect(() => {
    if (isUserLogin) {
      navigate.push('/home')
    }
  }, [isUserLogin])
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      {!isUserLogin ? (
        <Login setUserLogIn={setUserLogIn} />
      ) :null}
    </div>
  )
}
