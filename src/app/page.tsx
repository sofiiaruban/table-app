'use client'
import React, { useEffect, useState } from 'react'
import Login from './login/page'
import Table from './components/Table';
import Pagination from './components/Pagination';
import { PageClickEvent } from './types/PageClickEvent';
import Button from './components/Button';

export default function Home() {
  const ITEMS_PER_PAGE = 10;
  const [isUserLogin, setUserLogIn] = useState<boolean>(false);
  const [tableData, setTableData] = useState([]);
  const [count, setCount] = useState<number>(0);
  const pageCount: number = count ? Math.ceil( count / ITEMS_PER_PAGE) : 0;
  const [offset, setOffset]= useState<number>(0)
  const TABLE_URL =`https://technical-task-api.icapgroupgmbh.com/api/table/?limit=10&offset=${offset*10}`;

  const getTableData = async () => {
     try {
       const response = await fetch(TABLE_URL)
       if (response.ok) {
         const data = await response.json()
         setTableData(data.results)
         setCount(data.count)
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
  }, [isUserLogin, offset])

  const handlePageClick = (event: PageClickEvent) => {
    setOffset(event.selected)
  }
  const handleButtonClick = () => {
    console.log("click")
  }
  return (
    <div className="w-full flex flex-col justify-center items-center pt-10">
      {!isUserLogin ? (
        <Login setUserLogIn={setUserLogIn} />
      ) : (
        <>
          <Table list={tableData} />
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
          <Button title="Add user" handleClick={handleButtonClick} />
        </>
      )}
    </div>
  )
}
