import React,{useEffect} from 'react'
// import { Chart } from 'primereact/chart';
import './admin.css';
// import male from "../assets/images/man.svg"
// import female from "../assets/images/woman.svg"
// import naija from "../assets/images/naija.png"
// import nc from "../assets/images/nc.png"
import { Link } from 'react-router-dom';
import Logo from '../assets/images/72.png'
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDeathCenters } from '../redux/apiCalls';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
//   } from "recharts";
const DeathCenter = () => {

    const {id}=useParams();
    const navigate=useNavigate();
    const goBack = () => navigate(-1);
    const dispatch = useDispatch();
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    const {
        isLoading,
      centers
      } = useSelector((state) => state.death);
    useEffect(() => {
    getDeathCenters(dispatch,id)
    // console.log(centers)
    }, [dispatch,id])
    
    if(isLoading){
    return <div className='flex justify-content-center align-items-center'>
    <ProgressSpinner style={{width:'3rem',height:'3rem'}}/>
    </div>
    }

    
  return (
    <>
    <div className="grid my-3">
      <div className="col-12">
<div className='w-full flex flex-column '>
<Button label="Go back" icon="pi pi-arrow-left" className="p-button-sm w-2" onClick={goBack}  />
<h4>Death Registrations by Center's</h4>
<div className='py-2 bg-green-500'>

</div>
</div>
</div>

{
    centers.map((it,i)=>{
return <div className='col-12 md:col-4' key={i}>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>{it.Reg_Center_Name
}</span>
<span className='text-xs text-green-500 '>{numberWithCommas(it.count)}</span>
{/* <img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/> */}
{/* <Link to={`/birth/center/${it.LGA_ID}`}>
<span className='text-green-500 text-xs font-bold'>view centers</span>
</Link> */}


<Link to={`/death/list?center=${it.registration_center}`}>
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

export default DeathCenter;