export interface PaginationProps {
  pageCount: number
  handlePageClick: (selectedItem: { selected: number }) => void
  currentPage: number
}