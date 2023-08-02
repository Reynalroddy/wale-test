import React,{useEffect,useRef,useState} from 'react'
import { Button } from 'primereact/button';

import {  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { ProgressSpinner } from 'primereact/progressspinner';
import { getStillRegs2 } from '../redux/apiCalls';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import authFetch from '../axios';
const SingleApplication4 = () => {
    // const navigate=useNavigate();
    // const goBack = () => navigate(-1);
  const {id}=useParams();
  const toast = useRef(null);
  const dispatch = useDispatch();
const [loading,setLoading]= useState(false);
const [visible, setVisible] = useState(false);
const  [img,setImg] = useState('')
  const viewBirth=async()=>{
    // /cert/birth/${reg?.Certificate_No}
    setLoading(true)
try {
    console.log(reg?.Certificate_No);
    const res = await authFetch.get(`/cert/attestation/${reg?.attestation_number}`);
    console.log(res.data);
    setLoading(false)
    setImg(res.data);
    setVisible(true)
} catch (error) {
    setLoading(false)
    console.log(error);
    toast.current.show({ severity: 'error', summary: 'Error', detail: `${error.response.data.message}` });
}


  }
  const {
        isLoading,
      reg
      } = useSelector((state) => state.attest);
    useEffect(() => {
        getStillRegs2(dispatch,id)
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
        <div className="font-medium text-md text-500 mb-3">NIN</div>
        <div className="text-900 text-xl mb-5 font-bold">{reg&&reg?.nin}</div>
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
        <div className="text-900 text-xl mb-5 font-bold">{reg&&reg?.date_created}</div>
      </div>
        </div>
    
      </div>
    <div className="surface-card p-4 shadow-2 border-round my-2">
    
       
        <div className="grid grid-nogutter  pt-2">
            <div className="col-12 md:col-4 p-3">
                <div className="text-500 font-medium mb-2">REGISTRATION CENTRE</div>
                <div className="text-900">{reg&&reg.Reg_CenterData?.Reg_Center_Name}</div>
                
            </div>
            {/* <div className="col-12 md:col-3 p-3">
                <div className="text-500 font-medium mb-2">VILLAGE/TOWN</div>
                <div className="text-900">Demsa</div>
            </div> */}
            <div className="col-12 md:col-4 p-3">
                <div className="text-500 font-medium mb-2">LOCAL GOVERNMENT AREA</div>
                
                <div className="text-900">{reg&&reg?.lga_of_birthData?.LGA_Name}</div>
            </div>
            <div className="col-12 md:col-4 p-3">
                <div className="text-500 font-medium mb-2">STATE</div>
               
                
                <div className="text-900"> {reg&&reg.state_of_birthData?.State_Name}</div>
            </div>

           
            <div className="col-12 md:col-4 p-3">
                <div className="text-500 font-medium mb-2"> town_of_origin</div>
               
                
                <div className="text-900"> {reg&&reg?.town_of_origin}</div>
            </div>
            </div>
    
    
            <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
              <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars</div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">Name</div>
                <div className="text-900">{reg&&reg.firstname} {reg&&reg.MiddleName} {reg&&reg.surname}</div>
               
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">D0B</div>
                <div className="text-900">{reg&&reg.date_of_birth}</div>
                
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">Gender</div>
                <div className="text-900">{reg&&reg.sexData?.gender}</div>
                
                
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">Place of birth</div>
                <div className="text-900">{reg&&reg.place_of_birthData?.BirthPlace_Desc}</div>
                {/* place_of_birthData */}
               

            </div>


      
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">LGA</div>
               
                <div className="text-900">{reg&&reg.lga_of_birthData?.LGA_Name}</div>
               
            </div>


        
             <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">state of birth</div>
                <div className="text-900">{reg&&reg?.state_of_birthData?.State_Name}</div>
               
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">LGA Name</div>
                
                <div className="text-900">{reg&&reg?.lga_of_birthData?.LGA_Name}</div>
               

         
            </div> 
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">Country</div>
                
                <div className="text-900"> {reg&&reg?.country_of_birthData?.Country_Name}</div>
               
               
         
            </div> 

            
          
           
           
        </div>
    
        <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
              <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of Mother</div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">Name</div>

     
                <div className="text-900">{reg&&reg?.mother_surname} {reg&&reg?.mother_firstname}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">mother_name</div>
                <div className="text-900">{reg&&reg?.mother_maiden_name}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">NATIONAL ID NUMBER</div>
                <div className="text-900">{reg&&reg.mother?.NIN}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">State</div>
                <div className="text-900">{reg&&reg?.mother_stateData?.State_Name}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">LGA_Name</div>
                
                <div className="text-900">{reg&&reg?.mother_lgaData?.LGA_Name}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            {/* <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">Marital Status</div>
                <div className="text-900">{reg&&reg.mother?.Marital_StatusData?.Status_Desc}</div>
                
               
            </div> */}
         
    
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">NATIONALITY</div>
                <div className="text-900">{reg&&reg.mother?.Country_of_OriginData?.Country_Name}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}

                
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">STATE OF ORIGIN</div>
                <div className="text-900">{reg&&reg.mother?.State_of_OriginData?.State_Name}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            {/* <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">LITERATE/ILLITERATE</div>
                <div className="text-900">{reg&&reg.mother?.Literacy_LevelData?.Literacy}</div>
             
            </div>
    
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">LEVEL OF EDUCATION</div>
                <div className="text-900">{reg&&reg.mother?.EducationData?.Description}</div>
              
            </div> */}
    
            {/* <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">OCCUPATION</div>
                <div className="text-900">{reg&&reg.mother?.OccupationData?}</div>
                
            </div> */}
          
           
           
        </div>
        <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
              <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of father.</div>
              <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">Name</div>
                <div className="text-900">{reg&&reg?.firstname} {reg&&reg?.surname}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            {/* <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">Phone</div>
                <div className="text-900">{reg&&reg.father?.Phone_No}</div>
                
            </div> */}
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">father_town</div>
                <div className="text-900">{reg&&reg?.father_town}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">Father LGA</div>

            
                <div className="text-900">{reg&&reg?.father_lgaData?.LGA_Name}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">State_Name</div>
                
              
                <div className="text-900">{reg&&reg?.father_stateData?.State_Name}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">Marital Status</div>
                <div className="text-900">{reg&&reg.father?.Marital_StatusData?.Status_Desc}</div>
                
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">ETHNIC ORIGIN</div>
                <div className="text-900">{reg&&reg.father?.Ethnic_GroupData?.Ethnic_Grp_Name}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
    
            {/* <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">NATIONALITY</div>
                <div className="text-900">{reg&&reg.father?.NationalityData?.Country_Name}</div>
             
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">STATE OF ORIGIN</div>
                <div className="text-900">{reg&&reg.father?.State_of_OriginData?.State_Name}</div>
               
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">LITERATE/ILLITERATE</div>
                <div className="text-900">{reg&&reg.father?.Literacy_LevelData?.Literacy}</div>
                
            </div>
    
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">LEVEL OF EDUCATION</div>
                <div className="text-900">{reg&&reg.father?.EducationData?.Description}</div>
               
            </div> */}
          
           
    
    
            {/* {
        "user": "keston@email.com",
        "password": "faker00tX",
        "device": "12345673"
    }
    
    
    "user": "reynal-dcr@email.com",
        "password": "test1234",
        "device": "12345676" */}
    
    
           
        </div>
        <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
              <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>other Particulars</div>
              <div className="col-12 md:col-2 p-3">



                <div className="text-500 font-medium mb-2">request reason</div>
                <div className="text-900">{reg&&reg?.request_required_for}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">requester_name</div>
                <div className="text-900">{reg&&reg?.requester_name}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2"> requester_addres</div>
                <div className="text-900">{reg&&reg?.requester_address}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">applicant_phone</div>
                <div className="text-900">{reg&&reg?.applicant_phone}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>

            <div className="col-12 md:col-2 p-3">
                <div className="text-500 font-medium mb-2">applicant_email</div>
                <div className="text-900">{reg&&reg?.applicant_email}</div>
                {/* <div className="text-900">Elliot Alderson</div> */}
            </div>
           
        </div>
        <Button label="View Certificate" className="p-button-success my-2" onClick={viewBirth} loading={loading} />

<Toast ref={toast} />

{/* <div className="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} /> */}
        <Dialog header="Certificate" visible={visible} style={{ width: '70vw' }} onHide={() => setVisible(false)}>
            <img  src={`data:image/png;base64,${img} `} className='w-full' alt=''/>
        </Dialog>
    {/* </div> */}
    </div>
    
        </div>
  )
}

export default SingleApplication4