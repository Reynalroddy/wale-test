import React,{useEffect} from 'react'
// import { Button } from 'primereact/button';
// import authFetch from '../axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { ProgressSpinner } from 'primereact/progressspinner';
import { getStillRegs } from '../redux/apiCalls';
// import { Button } from 'primereact/button';
// import { Toast } from 'primereact/toast';
// import { Dialog } from 'primereact/dialog';
const SingleApplication3 = () => {
  const {id}=useParams();
//   const toast = useRef(null);
  const dispatch = useDispatch();

  const {
        isLoading,
      reg
      } = useSelector((state) => state.still);
    useEffect(() => {
        getStillRegs(dispatch,id)
    // console.log(reg)
    }, [dispatch,id])
    
    if(isLoading){
    return <div className='flex justify-content-center align-items-center'>
    <ProgressSpinner style={{width:'3rem',height:'3rem'}}/>
    </div>
    }
  return (
    <div> 

<div className="surface-card p-4 shadow-2 border-round">
  <div className='flex flex-column lg:flex-row lg:justify-content-between border-bottom-3 border-green-500'>
    <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">STILL BIRTH CERTIFICATE NUMBER</div>
    {/* <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.death_certificate_number}</div> */}
  </div>
  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">STATUS</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.approval_status===2?'queried':reg.approval_status === 1?'approved':reg.approval_status === 0?'pending':''}</div>
  </div>
  {/* <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">ENTRY NUMBER</div>
    <div className="text-900 text-xl mb-5 font-bold">6432</div>
  </div> */}

  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">DATE OF REGISTRATION</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.date_created
}</div>
  </div>
    </div>

  </div>
<div className="surface-card p-4 shadow-2 border-round my-2">

   
    <div className="grid grid-nogutter  pt-2">
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">Registration center</div>
            <div className="text-900">{reg&&reg.registration_centerData?.Reg_Center_Name}</div>
            
        </div>
        <div className="col-12 md:col-3 p-3">
            <div className="text-500 font-medium mb-2">BIRTH TYPE</div>
            <div className="text-900">{reg && reg.birth_typeData?.Description}</div>
        </div>
        <div className="col-12 md:col-3 p-3">
            <div className="text-500 font-medium mb-2">BIRTH PLACE</div>
            <div className="text-900">{reg && reg.birth_placeData?.BirthPlace_Desc}</div>
        </div>

   
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">LOCAL GOVERNMENT AREA</div>
            
            <div className="text-900">{reg&&reg.birth_lgaData?.LGA_Name}</div>
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">STATE</div>
           
            
            <div className="text-900"> {reg&&reg.birth_stateData?.State_Name}</div>
        </div>
        </div>


        <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of mother</div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg?.mother_fullname} </div>
           
        </div>
        {/* <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Date of death</div>
            <div className="text-900">{reg&&reg.deceased_date_of_death}</div>
            
        </div> */}
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Country</div>
            <div className="text-900">{reg&&reg.mother_nationalityData?.Country_Name}</div>
            
            
        </div>
        {/* <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Marital status</div>
            <div className="text-900">{reg&&reg.deceased_marital_statusData?.Status_Desc}</div>
           
           
        </div> */}
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Mothers Age </div>
           
            <div className="text-900">{reg&&reg.mother_age}</div>
           
        </div>
        {/* <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONALITY</div>
            <div className="text-900">{reg&&reg.deceased_nationalityData?.Country_Name}</div>
           
        </div> */}
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">SETTLEMENT</div>
            
            <div className="text-900">{reg&&reg.mother_settlementData?.Settlement_Type_Name}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">ETHNIC GROUP</div>
            
            <div className="text-900">{reg&&reg.mmother_ethnic_groupData?.Ethnic_Grp_Name}</div>
           
        </div>
      
        
       
    </div>



    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of informant</div>
          <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">FirstName</div>
            <div className="text-900">{reg&&reg.informant_fullname}</div>
           
        </div>

        {/* <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">SurName</div>
            <div className="text-900">{reg&&reg.informant_surname}</div>
           
        </div> */}
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">relationship with mother</div>
            <div className="text-900">{reg&&reg.informant_relationship_with_motherData?.Description}</div>

    
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LGA</div>
            <div className="text-900">{reg&&reg.informant_lgaData?.LGA_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">settlementData</div>
            <div className="text-900">{reg&&reg.informant_settlementData?.Settlement_Type_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
       
    </div>

    {/* </div> */}
</div>

    </div>
  )
}

export default SingleApplication3