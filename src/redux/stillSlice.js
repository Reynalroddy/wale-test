import { createSlice } from "@reduxjs/toolkit";

export const stillSlice = createSlice({
  name: "still",
  initialState: {
    geoPoliticalZones:[],
    states:[],
    lgas:[],
    centers:[],
    registerations:[],
    reg:{},
isLoading:false,
search: "",
    result_per_page: 20,
    page: 1,
    numPages:1,
    GeoZoneID: null,
    StateID: null,
    LGAID: null,
    CenterId: null,
    Sex: null,
    Age: null,
    BirthPlace: null,
    sexOptions:[],
    typeOptions:[],
    placeOptions:[],
    orderOptions:[],
  },

  reducers: {
    getStillZonesStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getStillZonesSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          geoPoliticalZones: action.payload,
        };
      },
      getStillZonesFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getOptionStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getSexOptionSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          sexOptions: action.payload,
        };
      },
     getTypeOptionSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          typeOptions: action.payload,
        };
      },

      getPlaceOptionSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          placeOptions: action.payload,
        };
      },
      getOrderOptionSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          orderOptions: action.payload,
        };
      },
      getOptionFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getStillStateStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getStillStateSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          states: action.payload,
        };
      },
      getStillStateFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getStillCenterStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getStillCenterSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
         centers: action.payload,
        };
      },
      getStillCenterFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      getStillLgaStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getStillLgaSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          lgas: action.payload,
        };
      },
      getStillLgaFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      getStillRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getStillRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          registerations: action.payload.result,
          numPages:action.payload.pagination.total,
        };
      },
      getStillRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getStillSingleRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getStillSingleRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          reg: action.payload
          // numPages:action.payload.pagination.total,
        };
      },
      getStillSingleRegFailure: (state) => {
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
          GeoZoneID: null,
          StateID: null,
          LGAID: null,
          CenterId: null,
          Sex: null,
          Age: null,
         
          BirthPlace: null,
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

export const { getStillZonesFailure,getStillZonesStart,getStillZonesSuccess,getStillStateFailure,getStillStateStart,getStillStateSuccess,getStillRegFailure,getStillRegStart,getStillRegSuccess,changePage,handleChange,getStillLgaFailure,getStillLgaStart,getStillLgaSuccess,getStillCenterFailure,getStillCenterStart,getStillCenterSuccess,getOptionFailure,getOptionStart,getSexOptionSuccess,getTypeOptionSuccess,getOrderOptionSuccess,getPlaceOptionSuccess,clearFilters,getStillSingleRegFailure,getStillSingleRegStart,getStillSingleRegSuccess } = stillSlice.actions;

export default stillSlice.reducer;