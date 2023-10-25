import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CurrentPage } from '@/app/types/CurrentPage'
import { RootState } from '../../store'


const initialState: CurrentPage = {
  value: 0
}

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  }
})

export const { setCurrentPage } = currentPageSlice.actions


export const selectCurrentPage = (state: RootState) => state.currentPage.value

export default currentPageSlice.reducer
