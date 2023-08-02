import React,{useEffect} from 'react'

import './admin.css';

// import nc from "../assets/images/nc.png"
import { Link } from 'react-router-dom';
// import Logo from '../assets/images/72.png'
import { useParams ,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDeathStates } from '../redux/apiCalls';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
const DeathRegState = () => {
// const lineRef= useRef(null);
const {id}=useParams();
const navigate=useNavigate();
const goBack = () => navigate(-1);
const dispatch = useDispatch();
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
const {
    isLoading,
   states
  } = useSelector((state) => state.death);
useEffect(() => {
getDeathStates(dispatch,id)
// console.log(states)
}, [dispatch,id])

if(isLoading){
return <div className='flex justify-content-center align-items-center'>
<ProgressSpinner style={{width:'3rem',height:'3rem'}}/>
</div>
}
    
  return (
    <>
    <div className="grid my-3">
         {/* <div className="col-12 md:col-6 lg:col-3">
        <div className="bg-white shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block  text-sm font-medium  mb-3">Total Birth Registrations</span>
                        <div className=" font-bold text-xl">12,000,000</div>
                        <div className='flex mt-2'>
                        <i className="pi pi-arrow-up text-green-500 text-xs font-bold"></i>
                        <span className='text-xs text-green-500 font-bold'>4.6%</span>
                        </div>
                        
                    </div>
                    <div className="flex align-items-center justify-content-center " style={{ width: '2.8rem', height: '2.8rem' }}>
                       <img src={naija} className='w-full' alt='' />
                        
                    </div>
                </div>
                
            </div>
        </div> */}
      
  
        {/* <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Yearly Registration Statistics</div>
                      
                    </div>

                    <Chart type="line" data={lineData} ref={lineRef}  className='my-chart'/>
                </div>
            </div> */}
      <div className="col-12">
<div className=' flex flex-column '>
<Button label="Go back" icon="pi pi-arrow-left" className="p-button-sm w-2" onClick={goBack}  />
<h4>Death Registrations by state</h4>
<div className='py-2 bg-green-500'>

</div>
</div>
</div>
{

states.map((it,i)=>{
    return <div className='col-12 md:col-4 ' key={i}>
    <div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
    <img  src={`/assets/img/${parseInt(it.State_ID)}.png`} style={{width:'3rem',height:'3rem'}} alt=''/>
    <span className='text-md uppercase font-bold'>{it.State_Name}</span>
    <span className='text-xs text-green-500 '>{numberWithCommas(it.count)}</span>
    {/* <img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/> */}
    <Link to={`/death/lga/${it.State_ID}`}>
    <span className='text-green-500 text-xs font-bold'>view lgas</span>
    </Link>
    
    

    <Link to={`/death/list?state=${it.State_ID}`}>
    <span className='text-green-500 text-xs font-bold'>view registrations</span>
    </Link>
    
        </div>
    </div>
})


}



        


          
           

         

           
         

    </div>
    </>
  )
}

export default DeathRegState;