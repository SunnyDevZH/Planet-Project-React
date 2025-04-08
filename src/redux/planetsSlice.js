import { createSlice } from '@reduxjs/toolkit';

const planetsSlice = createSlice({
  name: 'planets',
  initialState: [],
  reducers: {
    addPlanet: (state, action) => {
      state.push(action.payload);
    },
    removePlanet: (state, action) => {
      return state.filter((planet) => planet.name !== action.payload);
    },
  },
});

export const { addPlanet, removePlanet } = planetsSlice.actions;
export default planetsSlice.reducer;