import { createSlice } from "@reduxjs/toolkit";

export const attestSlice = createSlice({
  name: "attest",
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
    BirthType: null,
    BirthOrder: null,
    BirthPlace: null,
    sexOptions:[],
    typeOptions:[],
    placeOptions:[],
    orderOptions:[],
  },

  reducers: {
    getAttestZonesStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getAttestZonesSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          geoPoliticalZones: action.payload,
        };
      },
      getAttestZonesFailure: (state) => {
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

      getAttestStateStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getAttestStateSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          states: action.payload,
        };
      },
      getAttestStateFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getAttestCenterStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getAttestCenterSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
         centers: action.payload,
        };
      },
      getAttestCenterFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      getAttestLgaStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getAttestLgaSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          lgas: action.payload,
        };
      },
      getAttestLgaFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      getAttestRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getAttestRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          registerations: action.payload.result,
          numPages:action.payload.pagination.total,
        };
      },
      getAttestRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getAttestSingleRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getAttestSingleRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          reg: action.payload
          // numPages:action.payload.pagination.total,
        };
      },
      getAttestSingleRegFailure: (state) => {
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
          BirthType: null,
          BirthOrder: null,
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

export const { getAttestZonesFailure,getAttestZonesStart,getAttestZonesSuccess,getAttestStateFailure,getAttestStateStart,getAttestStateSuccess,getAttestRegFailure,getAttestRegStart,getAttestRegSuccess,changePage,handleChange,getAttestLgaFailure,getAttestLgaStart,getAttestLgaSuccess,getAttestCenterFailure,getAttestCenterStart,getAttestCenterSuccess,getOptionFailure,getOptionStart,getSexOptionSuccess,getTypeOptionSuccess,getOrderOptionSuccess,getPlaceOptionSuccess,clearFilters,getAttestSingleRegFailure,getAttestSingleRegStart,getAttestSingleRegSuccess } = attestSlice.actions;

export default attestSlice.reducer;