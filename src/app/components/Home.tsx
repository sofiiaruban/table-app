'use client'
import React, { useEffect, useState } from 'react'
import Table from './Table'
import Pagination from './Pagination'
import Button from './Button'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCurrentPage,
  setCurrentPage
} from '../redux/features/currentPage/currentPageSlice'
import ReduxProvider from '../redux/ReduxProvider'
import { PageClickEvent } from '../types/PageClickEvent'

export default function Home() {
  const ITEMS_PER_PAGE = 10
  const [tableData, setTableData] = useState([])
  const [count, setCount] = useState<number>(0)
  const currentPage = useSelector(selectCurrentPage)
  const [offset, setOffset] = useState<number>(0 || currentPage)
  const pageCount: number = Math.ceil(count / ITEMS_PER_PAGE) | 0
  const TABLE_URL = `https://technical-task-api.icapgroupgmbh.com/api/table/?limit=10&offset=${
    offset * 10
  }`
  const dispatch = useDispatch()

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
    const newOffset = event.selected
    setOffset(newOffset)
    dispatch(setCurrentPage(newOffset))
    console.log(currentPage)
  }

  return (
    <ReduxProvider>
      <div className="w-full flex flex-col  items-center h-screen">
        <Table list={tableData} />
        <div className="container flex justify-center gap-28">
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} currentPage={currentPage}/>
          <Link href={'/user'}>
            <Button title="Add user" />
          </Link>
        </div>
      </div>
    </ReduxProvider>
  )
}
