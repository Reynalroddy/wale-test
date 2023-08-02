import { createSlice } from "@reduxjs/toolkit";

export const modBirthSlice = createSlice({
  name: "birth",
  initialState: {
    registerations:[],
    reg:{},
isLoading:false,
search: "",
    result_per_page: 20,
    page: 1,
    numPages:1,
    StateID: null,

  },

  reducers: {

      getRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          registerations: action.payload.result,
          numPages:action.payload.pagination.total,
        };
      },
      getRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getSingleRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getSingleRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          reg: action.payload
          // numPages:action.payload.pagination.total,
        };
      },
      getSingleRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      changePage: (state, action) => {
        return {
          ...state,
          page: action.payload,
        };
      },
      handleChange: (state, action) => {
        return {
          ...state,
          page: 1,
          [action.payload.name]: action.payload.value,
        };
      },
      clearFilters: (state) => {
        const init = {
          search: "",
          result_per_page: 20,
          page: 1,
        
          StateID: null,
        };
        return {
          ...state,
          ...init,
        };
      },

//     addItem:(state,action)=>{
// state.items = [...state.items,action.payload];
// localStorage.setItem('itemsInvoice',JSON.stringify(state.items));
//     },
//     removeItem:(state,action)=>{
// const id = action.payload;
// const newItem = state.items.filter((item)=>item.id !==id);
// state.items =newItem;
// localStorage.setItem('itemsInvoice',JSON.stringify(state.items));
//     },
//     toggleHeader: (state) => {
//       return { ...state, isOpen: !state.isOpen };
//     },

//     handleChange:(state,action)=>{
// return {...state,[action.payload.name]:action.payload.value};

//     }
  },
});

export const { getRegFailure,getRegStart,getRegSuccess,changePage,handleChange,clearFilters,getSingleRegFailure,getSingleRegStart,getSingleRegSuccess } = modBirthSlice.actions;

export default modBirthSlice.reducer;