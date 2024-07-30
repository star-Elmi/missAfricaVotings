import { createSlice } from "@reduxjs/toolkit";
// this is like a feature for your application 

// tell the datas that you want to manage 
const initialState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleModal: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})

// then you select the reducer
// console.log(modalSlice);
export default modalSlice.reducer

export const {handleModal} =modalSlice.actions


