import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filteredProducts: [],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    FILTER_BY_SEARCH(state, action) {
      const { beats, search } = action.payload
      const tempBeats = beats.filter(
        (beat) =>
          beat.tagOne.toLowerCase().includes(search.toLowerCase()) ||
          beat.tagTwo.toLowerCase().includes(search.toLowerCase()) ||
          beat.tagThree.toLowerCase().includes(search.toLowerCase()) ||
          beat.title.toLowerCase().includes(search.toLowerCase())
      )
      state.filteredProducts = tempBeats
    },
  },
})

export const { FILTER_BY_SEARCH } = filterSlice.actions

export const selectFilteredProducts = (state) => state.filter.filteredProducts

export default filterSlice.reducer
