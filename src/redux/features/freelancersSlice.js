import { createSlice } from '@reduxjs/toolkit'
import {freelancers} from '../../data/freelancers';



export const freelanceSlice = createSlice({
  name: 'freelancers',
  initialState: {
    freelancers: freelancers,
    allUniqueCategory : [...new Set(freelancers.map(category => category.category))],
    allUniqueTag : [...new Set(freelancers.map(tag => tag.tag))],
    specificFreelancer:freelancers[0],
  },
 reducers:{

 },
})

// Action creators are generated for each case reducer function
// export const { } = freelanceSlice.actions;
export default freelanceSlice.reducer;