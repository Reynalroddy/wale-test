import React,{useEffect} from 'react'
import './admin.css';
import { useDispatch, useSelector } from "react-redux";
// import naija from "../assets/images/naija.png"
// import nc from "../assets/images/nc.png"
// import ne from "../assets/images/nc.png"
// import nw from "../assets/images/nc.png"
// import se from "../assets/images/nc.png"
// import ss from "../assets/images/nc.png"
// import sw from "../assets/images/nc.png"
import { Link } from 'react-router-dom';
// import Logo from '../assets/images/72.png'
import { getDeathZones } from '../redux/apiCalls';
import { ProgressSpinner } from 'primereact/progressspinner';
const DeathReg = () => {
    const dispatch = useDispatch();
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    const {
        isLoading,
        geoPoliticalZones
      } = useSelector((state) => state.death);
useEffect(() => {
getDeathZones(dispatch)
// console.log(geoPoliticalZones)
}, [dispatch])

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
      

      <div className="col-12">
<div className='w-full flex flex-column '>
<h4>Death Registrations by Geo-political zone</h4>
<div className='py-2 bg-green-500'>

</div>
</div>
</div>
{geoPoliticalZones.map((it,i)=>{

return <div className='col-12 md:col-4 ' key={i}>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
{/* <img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/> */}
<span className='text-md uppercase font-bold'>{it.Geo_Zone_Name}</span>
<span className='text-xs text-green-500 '>{numberWithCommas(it.count)}</span>
<img  src={it.img}  style={{width:'4rem',height:'4rem'}} alt=''/>
<Link to={`/death/state/${it.Geo_Zone_id}`}>
<span className='text-green-500 text-xs font-bold'>view states</span>
</Link>

    </div>
</div>
}
)}
{/* <div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<Link to={`/birth/state/:id`}>
<span className='text-green-500 text-xs font-bold'>view states</span>
</Link>

    </div>
</div>

<div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-green-500 text-xs font-bold'>view states</span>
    </div>
</div>

<div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-green-500 text-xs font-bold'>view states</span>
    </div>
</div>

<div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-green-500 text-xs font-bold'>view states</span>
    </div>
</div>

<div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-green-500 text-xs font-bold'>view states</span>
    </div>
</div>

<div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-green-500 text-xs font-bold'>view states</span>
    </div>
</div> */}

        


          
           

         

           
         

    </div>
    </>
  )
}

export default DeathReg;