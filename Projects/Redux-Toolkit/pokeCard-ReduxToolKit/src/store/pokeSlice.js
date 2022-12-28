import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokeData:"",
  pokeNameData: '',
  nextUrl: '',
  prevUrl: '',
  url:'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24'
}

export const pokeSlice = createSlice({
  name: 'poke',
  initialState,
  reducers: {
    pokeUrlData: (state, action) => {
      state.prevUrl = action.payload.data.previous
      state.nextUrl = action.payload.data.next
    },
   
    pokeName: (state, action) => {
      state.pokeNameData = action.payload
    },
    pokeData:(state,action) => {
      state.pokeData = action.payload
    },
    getUrl:(state,action) => {
      state.url = action.payload
    }
    
  },
})
export const { pokeUrlData,pokeName,pokeData,getUrl } = pokeSlice.actions
export default pokeSlice.reducer
