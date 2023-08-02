import { createSlice } from "@reduxjs/toolkit";

export const deathSlice = createSlice({
  name: "death",
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
    Cause: null,
    sexOptions:[],
    typeOptions:[],
    placeOptions:[],
    orderOptions:[],
    causeOptions:[],
  },

  reducers: {
    getDeathZonesStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getDeathZonesSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          geoPoliticalZones: action.payload,
        };
      },
      getDeathZonesFailure: (state) => {
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
      getCauseOptionSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          causeOptions: action.payload,
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

      getDeathStateStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getDeathStateSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          states: action.payload,
        };
      },
      getDeathStateFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getDeathCenterStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getDeathCenterSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
         centers: action.payload,
        };
      },
      getDeathCenterFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      getDeathLgaStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getDeathLgaSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          lgas: action.payload,
        };
      },
      getDeathLgaFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      getDeathRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getDeathRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          registerations: action.payload.result,
          numPages:action.payload.pagination.total,
        };
      },
      getDeathRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getDeathSingleRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getDeathSingleRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          reg: action.payload
          // numPages:action.payload.pagination.total,
        };
      },
      getDeathSingleRegFailure: (state) => {
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
        //   Age: null,
        //   BirthType: null,
        //   BirthOrder: null,
        //   BirthPlace: null,
          Cause:null,
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

export const { getDeathZonesFailure,getDeathZonesStart,getDeathZonesSuccess,getDeathStateFailure,getDeathStateStart,getDeathStateSuccess,getDeathRegFailure,getDeathRegStart,getDeathRegSuccess,changePage,handleChange,getDeathLgaFailure,getDeathLgaStart,getDeathLgaSuccess,getDeathCenterFailure,getDeathCenterStart,getDeathCenterSuccess,getOptionFailure,getOptionStart,getSexOptionSuccess,getTypeOptionSuccess,getOrderOptionSuccess,getPlaceOptionSuccess,clearFilters,getDeathSingleRegFailure,getDeathSingleRegStart,getDeathSingleRegSuccess,getCauseOptionSuccess } = deathSlice.actions;

export default deathSlice.reducer;