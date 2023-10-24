'use client'
import React, { useState } from 'react'
import Login from './login/page'
import Table from './components/Table';

export default function Home() {
  const [isUserLogin, setUserLogIn] = useState<boolean>(false);
  
  return (
    <div className="w-full">
      {!isUserLogin ? <Login setUserLogIn={setUserLogIn} /> : <Table list={[]} />}
    </div>
  )
}
