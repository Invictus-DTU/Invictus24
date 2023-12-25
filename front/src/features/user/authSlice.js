import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  verified: false,
}

export const authSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    doAuth: async(state) => {
      fetch('http://localhost:8080/api/authenticate',{method: "GET"})
      .then((result)=>{
         state.verified= result.valid;
         console.log("verified");
      })
      .catch((err)=>{
        console.log("cannot authenticate");
        console.log(err);
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { doAuth } = authSlice.actions

export default authSlice.reducer