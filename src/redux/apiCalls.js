import authFetch from "../axios";
import { getZonesFailure,getZonesStart,getZonesSuccess,getStateFailure,getStateStart,getStateSuccess ,getRegFailure,getRegStart,getRegSuccess,getLgaFailure,getLgaStart,getLgaSuccess,getCenterFailure,getCenterStart,getCenterSuccess,getOptionFailure,getOptionStart,getSexOptionSuccess,getTypeOptionSuccess,getOrderOptionSuccess,getPlaceOptionSuccess,getSingleRegFailure,getSingleRegStart,getSingleRegSuccess } from "./birthSlice";
import { getAttestZonesFailure,getAttestZonesStart,getAttestZonesSuccess,getAttestStateFailure,getAttestStateStart,getAttestStateSuccess,getAttestLgaFailure,getAttestLgaStart,getAttestLgaSuccess ,getAttestCenterFailure,getAttestCenterStart,getAttestCenterSuccess,getAttestRegFailure,getAttestRegStart,getAttestRegSuccess,getAttestSingleRegFailure,getAttestSingleRegStart,getAttestSingleRegSuccess} from "./attestSlice";
  // getStateFailure,getStateStart,getStateSuccess ,getRegFailure,getRegStart,getRegSuccess,getLgaFailure,getLgaStart,getLgaSuccess,getCenterFailure,getCenterStart,getCenterSuccess,getOptionFailure,getOptionStart,getSexOptionSuccess,getTypeOptionSuccess,getOrderOptionSuccess,getPlaceOptionSuccess,getSingleRegFailure,getSingleRegStart,getSingleRegSuccess 
import { getDeathZonesFailure,getDeathZonesStart,getDeathZonesSuccess,getDeathStateFailure,getDeathStateStart,getDeathStateSuccess,getDeathLgaFailure,getDeathLgaStart,getDeathLgaSuccess ,getDeathCenterFailure,getDeathCenterStart,getDeathCenterSuccess,getCauseOptionSuccess,getDeathRegFailure,getDeathRegStart,getDeathRegSuccess,getDeathSingleRegFailure,getDeathSingleRegStart,getDeathSingleRegSuccess } from "./deathSlice";
import { getStillZonesFailure,getStillZonesStart,getStillZonesSuccess,getStillStateFailure,getStillStateStart,getStillStateSuccess,getStillLgaFailure,getStillLgaStart,getStillLgaSuccess ,getStillCenterFailure,getStillCenterStart,getStillCenterSuccess,getStillRegFailure,getStillRegStart,getStillRegSuccess,getStillSingleRegStart,getStillSingleRegSuccess,getStillSingleRegFailure} from "./stillSlice";
// import nc from "../assets/images/nc.png"
// import ne from "../assets/images/nc.png"
// import nw from "../assets/images/nc.png"
// import se from "../assets/images/nc.png"
// import ss from "../assets/images/nc.png"
// import sw from "../assets/images/nc.png"
// import { Dispatch } from "react";
// import { dataOptions } from "../utils";
import { dataOptions } from "../utils";
import { loginStart,loginFailure,loginSuccess } from "./userSlice";
import { toast } from "react-toastify";
import { addUserToLocalStorage } from "./functions";

export const getZones=async(dispatch)=>{
    dispatch(getZonesStart());
    try {
      const res = await authFetch.get("birth-registration/stats/birth-reg-by-geozone");
      const newRes=res.data.map((it,i)=>{
if(it.Geo_Zone_Name ==='North-Central'){
return {...it,img:'/assets/img/nc.png'}
}
if(it.Geo_Zone_Name ==='South-East'){
    return {...it,img:'/assets/img/se.png'}
    }
    if(it.Geo_Zone_Name ==='North-East'){
        return {...it,img:'/assets/img/ne.png'}
        }
        if(it.Geo_Zone_Name ==='North-West'){
            return {...it,img:'/assets/img/nw.png'}
            }
            if(it.Geo_Zone_Name ==='South-South'){
                return {...it,img:'/assets/img/ss.png'}
                }
                if(it.Geo_Zone_Name ==='South-West'){
                    return {...it,img:'/assets/img/sw.png'}
                    }
return it;

      })
      dispatch(getZonesSuccess(newRes));
    } catch (error) {
      dispatch(getZonesFailure());
    console.log(error)
    }
    // clearAlert(dispatch);

}


export const getDeathZones=async(dispatch)=>{
  dispatch(getDeathZonesStart());
  try {
    const res = await authFetch.get("death-registration/stats/birth-reg-by-geozone");
    const newRes=res.data.map((it,i)=>{
if(it.Geo_Zone_Name ==='North-Central'){
return {...it,img:'/assets/img/nc.png'}
}
if(it.Geo_Zone_Name ==='South-East'){
  return {...it,img:'/assets/img/se.png'}
  }
  if(it.Geo_Zone_Name ==='North-East'){
      return {...it,img:'/assets/img/ne.png'}
      }
      if(it.Geo_Zone_Name ==='North-West'){
          return {...it,img:'/assets/img/nw.png'}
          }
          if(it.Geo_Zone_Name ==='South-South'){
              return {...it,img:'/assets/img/ss.png'}
              }
              if(it.Geo_Zone_Name ==='South-West'){
                  return {...it,img:'/assets/img/sw.png'}
                  }
return it;

    })
    dispatch(getDeathZonesSuccess(newRes));
  } catch (error) {
    dispatch(getDeathZonesFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}


export const getAttestZones=async(dispatch)=>{
  dispatch(getAttestZonesStart());
  try {
    const res = await authFetch.get("birth-attestation/stats/birth-reg-by-geozone");
    const newRes=res.data.map((it,i)=>{
if(it.Geo_Zone_Name ==='North-Central'){
return {...it,img:'/assets/img/nc.png'}
}
if(it.Geo_Zone_Name ==='South-East'){
  return {...it,img:'/assets/img/se.png'}
  }
  if(it.Geo_Zone_Name ==='North-East'){
      return {...it,img:'/assets/img/ne.png'}
      }
      if(it.Geo_Zone_Name ==='North-West'){
          return {...it,img:'/assets/img/nw.png'}
          }
          if(it.Geo_Zone_Name ==='South-South'){
              return {...it,img:'/assets/img/ss.png'}
              }
              if(it.Geo_Zone_Name ==='South-West'){
                  return {...it,img:'/assets/img/sw.png'}
                  }
return it;

    })
    dispatch(getAttestZonesSuccess(newRes));
  } catch (error) {
    dispatch(getAttestZonesFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}


export const getStillZones=async(dispatch)=>{
  dispatch(getStillZonesStart());
  try {
    const res = await authFetch.get("stillbirth/stats/birth-reg-by-geozone");
    const newRes=res.data.map((it,i)=>{
if(it.Geo_Zone_Name ==='North-Central'){
return {...it,img:'/assets/img/nc.png'}
}
if(it.Geo_Zone_Name ==='South-East'){
  return {...it,img:'/assets/img/se.png'}
  }
  if(it.Geo_Zone_Name ==='North-East'){
      return {...it,img:'/assets/img/ne.png'}
      }
      if(it.Geo_Zone_Name ==='North-West'){
          return {...it,img:'/assets/img/nw.png'}
          }
          if(it.Geo_Zone_Name ==='South-South'){
              return {...it,img:'/assets/img/ss.png'}
              }
              if(it.Geo_Zone_Name ==='South-West'){
                  return {...it,img:'/assets/img/sw.png'}
                  }
return it;

    })
    dispatch(getStillZonesSuccess(newRes));
  } catch (error) {
    dispatch(getStillZonesFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}

export const getStates=async(dispatch,id)=>{
    dispatch(getStateStart());
    try {
      const res = await authFetch.get(`birth-registration/stats/birth-reg-by-states/${id}`);

      dispatch(getStateSuccess(res.data));
    } catch (error) {
      dispatch(getStateFailure());
    console.log(error)
    }
    // clearAlert(dispatch);

}

export const getDeathStates=async(dispatch,id)=>{
  dispatch(getDeathStateStart());
  try {
    const res = await authFetch.get(`death-registration/stats/birth-reg-by-states/${id}`);
    dispatch(getDeathStateSuccess(res.data));
  } catch (error) {
    dispatch(getDeathStateFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}


export const getAttestStates=async(dispatch,id)=>{
  dispatch(getAttestStateStart());
  try {
    const res = await authFetch.get(`birth-attestation/stats/birth-reg-by-states/${id}`);
    dispatch(getAttestStateSuccess(res.data));
  } catch (error) {
    dispatch(getAttestStateFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}


export const getStillStates=async(dispatch,id)=>{
  dispatch(getStillStateStart());
  try {
    const res = await authFetch.get(`stillbirth/stats/birth-reg-by-states/${id}`);
    dispatch(getStillStateSuccess(res.data));
  } catch (error) {
    dispatch(getStillStateFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}


export const getLgas=async(dispatch,id)=>{
  dispatch(getLgaStart());
  try {
    const res = await authFetch.get(`birth-registration/stats/birth-reg-by-lga/${id}`);

    dispatch(getLgaSuccess(res.data));
  } catch (error) {
    dispatch(getLgaFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}

export const getAttestLgas=async(dispatch,id)=>{
  dispatch(getAttestLgaStart());
  try {
    const res = await authFetch.get(`birth-attestation/stats/birth-reg-by-lga/${id}`);

    dispatch(getAttestLgaSuccess(res.data));
  } catch (error) {
    dispatch(getAttestLgaFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}

export const getDeathLgas=async(dispatch,id)=>{
  dispatch(getDeathLgaStart());
  try {
    const res = await authFetch.get(`death-registration/stats/birth-reg-by-lga/${id}`);

    dispatch(getDeathLgaSuccess(res.data));
  } catch (error) {
    dispatch(getDeathLgaFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}

export const getStillLgas=async(dispatch,id)=>{
  dispatch(getStillLgaStart());
  try {
    const res = await authFetch.get(`stillbirth/stats/birth-reg-by-lga/${id}`);
    dispatch(getStillLgaSuccess(res.data));
  } catch (error) {
    dispatch(getStillLgaFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}

export const getCenters=async(dispatch,id)=>{
  dispatch(getCenterStart());
  try {
    const res = await authFetch.get(`birth-registration/stats/birth-reg-by-centre/${id}`);

    dispatch(getCenterSuccess(res.data));
  } catch (error) {
    dispatch(getCenterFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}


export const getAttestCenters=async(dispatch,id)=>{
  dispatch(getAttestCenterStart());
  try {
    const res = await authFetch.get(`birth-attestation/stats/birth-reg-by-centre/${id}`);

    dispatch(getAttestCenterSuccess(res.data));
  } catch (error) {
    dispatch(getAttestCenterFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}

export const getDeathCenters=async(dispatch,id)=>{
  dispatch(getDeathCenterStart());
  try {
    const res = await authFetch.get(`death-registration/stats/birth-reg-by-centre/${id}`);

    dispatch(getDeathCenterSuccess(res.data));
  } catch (error) {
    dispatch(getDeathCenterFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}

export const getStillCenters=async(dispatch,id)=>{
  dispatch(getStillCenterStart());
  try {
    const res = await authFetch.get(`stillbirth/stats/birth-reg-by-centre/${id}`);

    dispatch(getStillCenterSuccess(res.data));
  } catch (error) {
    dispatch(getStillCenterFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}


export const getRegz=async(dispatch,
    search,
    result_per_page,
    page,
    stateId,
            lgaId,
           centerId,
    Sex,
    Age,
    BirthType,
    BirthOrder,
    BirthPlace,
    dateFrom,
    dateTo
    )=>{
    dispatch(getRegStart());

    const data = {
            search: search,
            result_per_page: result_per_page,
            page:  page,
            StateID: stateId,
            LGAID: lgaId,
            CenterId: centerId,
            Sex: Sex,
            Age:  Age,
            BirthType: BirthType,
            BirthOrder: BirthOrder,
            BirthPlace: BirthPlace  ,
            DateFrom:dateFrom?.toString(),
            DateTo:dateTo?.toString()
    }
    try {
      const res = await authFetch.get(`birth-registration/`,{
        params: data
      });


      dispatch(getRegSuccess(res.data));
      console.log(res.data)
    } catch (error) {
      dispatch(getRegFailure());
    console.log(error)
    }
   

}


export const getAttestRegz=async(dispatch,
  search,
  result_per_page,
  page,
  stateId,
          lgaId,
         centerId,
  Sex,
  Age,
  BirthType,
  BirthOrder,
  BirthPlace
  )=>{
  dispatch(getAttestRegStart());

  const data = {
          search: search,
          result_per_page: result_per_page,
          page:  page,
          StateID: stateId,
          LGAID: lgaId,
          CenterId: centerId,
          Sex: Sex,
          Age:  Age,
          BirthType: BirthType,
          BirthOrder: BirthOrder,
          BirthPlace: BirthPlace  
  }
  try {
    const res = await authFetch.get(`birth-attestation/`,{
      params: data
    });


    dispatch(getAttestRegSuccess(res.data));
    console.log(res.data)
  } catch (error) {
    dispatch(getAttestRegFailure());
  console.log(error)
  }
 

}

export const getStillRegz=async(dispatch,
  search,
  result_per_page,
  page,
  stateId,
          lgaId,
         centerId,
  Sex,
  Age,
  BirthPlace
  )=>{
  dispatch(getStillRegStart());

  const data = {
          search: search,
          result_per_page: result_per_page,
          page:  page,
          StateID: stateId,
          LGAID: lgaId,
          CenterId: centerId,
          Sex: Sex,
          Age:  Age,
          BirthPlace: BirthPlace  
  }
  try {
    const res = await authFetch.get(`stillbirth/`,{
      params: data
    });


    dispatch(getStillRegSuccess(res.data));
    console.log(res.data)
  } catch (error) {
    dispatch(getStillRegFailure());
  console.log(error)
  }
 

}


export const getDeathRegz=async(dispatch,
  search,
  result_per_page,
  page,
  stateId,
          lgaId,
         centerId,
  Sex,
  Cause
  )=>{
  dispatch(getDeathRegStart());

  const data = {
          search: search,
          result_per_page: result_per_page,
          page:  page,
          StateID: stateId,
          LGAID: lgaId,
          CenterId: centerId,
          Sex: Sex,
          CauseOfDeath:Cause  
  }
  try {
    const res = await authFetch.get(`death-registration/`,{
      params: data
    });


    dispatch(getDeathRegSuccess(res.data));
    console.log(res.data)
  } catch (error) {
    dispatch(getDeathRegFailure());
  console.log(error)
  }
 

}




export const getRegs=async(dispatch,id)=>{
  dispatch(getSingleRegStart());
  try {
    const res = await authFetch.get(`birth-registration/${id}`);
    dispatch(getSingleRegSuccess(res.data.data));
    // console.log(res.data.data)
  } catch (error) {
    dispatch(getSingleRegFailure());
  console.log(error);
    
    
      
     
  }
  // clearAlert(dispatch);

}

export const getStillRegs=async(dispatch,id)=>{
  dispatch(getStillSingleRegStart());
  try {
    const res = await authFetch.get(`stillbirth/${id}`);
    dispatch(getStillSingleRegSuccess(res.data.data));
    // console.log(res.data.data)
  } catch (error) {

    dispatch(getStillSingleRegFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}


export const getStillRegs2=async(dispatch,id)=>{
  dispatch(getAttestSingleRegStart());
  try {
    const res = await authFetch.get(`/birth-attestation/${id}/admin`);
    dispatch(getAttestSingleRegSuccess(res.data.data));
    // console.log(res.data.data)
  } catch (error) {

    dispatch(getAttestSingleRegFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}

export const getDeathRegs=async(dispatch,id)=>{
  dispatch(getDeathSingleRegStart());
  try {
    const res = await authFetch.get(`death-registration/${id}`);
    dispatch(getDeathSingleRegSuccess(res.data.data));
    console.log(res.data.data)
  } catch (error) {
    dispatch(getDeathSingleRegFailure());
  console.log(error);
  }
  // clearAlert(dispatch);
                                           
}







export const getGender = (g)=>{
let res;
   const ans= dataOptions.gender.filter(item=>g.toString() === item.Gender_ID);
res = ans[0].Gender;
// console.log(res);
return res;
}

export const getOrder=(order)=>{
    let res;
    const ans= dataOptions.birthOrder.filter(item=>order === item.Birth_Order);
    // console.log(ans,order)
 res = ans[0].Desc;
//  console.log(res);
 return res;

}

export const getType=(type)=>{
    
}

// export const getCause=async()=>{
//   dispatch(getCauseStart());
//   try {
//     const res = await authFetch.get(`option/cause-of-death`);
   
//     const newRes = results[0].value.data.map((item,i)=>{
  
//       return {label: item.Gender, value: item.Gender_ID}
//       });
//       dispatch(getCauseSuccess(res.data.data));
//     // console.log(res.data.data)
//   } catch (error) {

//     dispatch(getCauseFailure());
//   console.log(error)
//   }
// }

export const getPlace=(place)=>{
  let res;
  const ans= dataOptions.birthPlace.filter(item=>place === item.BirthPlace_ID);
  // console.log(ans)
res = ans[0].BirthPlace_Desc;
return res;
  
}

export const getSex=async(dispatch)=>{
  dispatch(getOptionStart());
  try {
    await Promise.allSettled([
      authFetch.get(`option/sex`),
      authFetch.get(`option/birth-type`),
      authFetch.get(`option/birth-order`),
      authFetch.get(`option/birth-place`),
      authFetch.get(`option/cause-of-death`)
    ])
      .then((results) => {
        // const [repos, followers] = results;
        const status = 'fulfilled';
        if (results[0].status === status) {
          const newRes = results[0].value.data.map((item,i)=>{
  
return {label: item.gender, value: item.Gender_ID}
});
    dispatch(getSexOptionSuccess(newRes));
        }
        if (results[1].status === status) {
          const newRes = results[1].value.data.map((item,i)=>{
  
return {label: item.Description, value: item.Birth_Type_ID}
});
    dispatch(getTypeOptionSuccess(newRes));
        }
        if (results[2].status === status) {
          const newRes = results[2].value.data.map((item,i)=>{
  
return {label: item.Desc, value: item.Birth_Order_ID}
});
    dispatch(getOrderOptionSuccess(newRes));
        }
        if (results[3].status === status) {
          const newRes = results[3].value.data.map((item,i)=>{
  
return {label: item.BirthPlace_Desc , value: item.BirthPlace_ID}
});
    dispatch(getPlaceOptionSuccess(newRes));
        }
        if (results[4].status === status) {
          const newRes = results[4].value.data.map((item,i)=>{
  
return {label: item.Description , value: item.id}
});
    dispatch(getCauseOptionSuccess(newRes));
        }
        // console.log(results);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    dispatch(getOptionFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}

export const loginUser = async (currentUser, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await authFetch.post("auth/login", currentUser);
    const { user, access_token } = res.data;
    console.log(user,access_token
      )
    dispatch(loginSuccess(res.data));
    toast.success("user logged in successfully..redirecting..", {
      position: "top-left",
    });
    addUserToLocalStorage({ user, token:access_token });
  } catch (error) {
    // console.log(error.response.data.msg);
    dispatch(loginFailure());
    toast.error(`${error.response.data.message}`, {
      position: "top-left",
    });
  }
  // clearAlert(dispatch);
};