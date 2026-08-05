import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items: []
}

const cardSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        test(){
            console.log('I am coming from the store');
            
        }
    }
})
export const  {test}= cardSlice.actions;
export default cardSlice.reducer;