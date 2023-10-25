'use client'
import React, { useEffect, useState } from 'react'
import { PageClickEvent } from '../types/PageClickEvent';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import Button from '../components/Button';
import Link from 'next/link';


export default function Home() {
  const ITEMS_PER_PAGE = 10;
  const [tableData, setTableData] = useState([]);
  const [count, setCount] = useState<number>(0);
  const [offset, setOffset]= useState<number>(0);
  const pageCount: number = Math.ceil(count / ITEMS_PER_PAGE) | 0;
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
    getTableData()
  }, [offset])

  const handlePageClick = (event: PageClickEvent) => {
    setOffset(event.selected)
  }

  return (
    <div className="w-full flex flex-col  items-center h-screen">
      <Table list={tableData} />
      <div className="container flex justify-center gap-28">
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
          <Link href={'/user'}>
            <Button title="Add user" />
          </Link>
      </div>
    </div>
  )
}
