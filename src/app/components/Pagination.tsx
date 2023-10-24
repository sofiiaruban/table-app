import React from 'react'
import ReactPaginate from 'react-paginate'
import { PaginationProps } from '../types/PaginationProps'

export default function Pagination({pageCount, handlePageClick}: PaginationProps) {
  return (
    <ReactPaginate
      className="flex gap-3"
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      pageClassName="border px-2 py-1 rounded"
      previousClassName="border px-2 py-1 rounded"
      nextClassName="border px-2 py-1 rounded"
      breakClassName="border px-2 py-1 rounded"
      previousLabel="< previous"
      activeClassName="font-bold"
      renderOnZeroPageCount={null}
    />
  )
}
