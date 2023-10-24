'use client'
import React, { useEffect, useState } from 'react'
import Login from './login/page'
import Table from './components/Table';

export default function Home() {
  const [isUserLogin, setUserLogIn] = useState<boolean>(false);
  const [tableData, setTableData] = useState([]);

  const TABLE_URL =
    "https://technical-task-api.icapgroupgmbh.com/api/table/?limit=10";

  const getTableData = async () => {
     try {
       const response = await fetch(TABLE_URL)
       if (response.ok) {
         const data = await response.json()
         setTableData(data.results)
       } else {
         console.error('Failed to fetch table data.')
       }
     } catch (error) {
       console.error('An error occurred while fetching table data:', error)
     }
  }
  useEffect(() => {
    if (isUserLogin) {
      getTableData()
    }
  }, [isUserLogin])

  return (
    <div className="w-full">
      {!isUserLogin ? (
        <Login setUserLogIn={setUserLogIn} />
      ) : (
        <Table list={tableData} />
      )}
    </div>
  )
}
