import React,{useState,useEffect} from 'react'
import './admin.css';
import { Link } from 'react-router-dom';
// import Logo from '../assets/images/72.png'
import authFetch from '../axios';
const Registrars = () => {
  const [lists,setLists]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    const viewBirth = async()=>{
      // /cert/birth/${reg?.Certificate_No}
      setLoading(true)
  try {
      // console.log(reg?.Certificate_No);
      const res = await authFetch.get(`users/registra-states`);
      console.log(res.data);
      setLoading(false)
      setLists(res.data)
  } catch (error) {
      setLoading(false)
      console.log(error);
      // toast.current.show({ severity: 'error', summary: 'Error', detail: `` });
  }
    }
   viewBirth()
  }, [])
  
  if(loading){
  return       <div className="col-12">
  <div className='w-full flex flex-column '>
  <h4>Total DCR By States</h4>
  <div className='py-2 bg-green-500'>
  <div>loading....</div>
  </div>
  </div>
  </div>
  }
  return (
    <>
    <div className="grid my-3">
       
      

      <div className="col-12">
<div className='w-full flex flex-column '>
<h4>Total Registrars By States</h4>
<div className='py-2 bg-green-500'>

</div>
</div>
</div>

{
lists.map((item,i)=>{

return (
<div className='col-12 md:col-4 ' key={i}>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={`/assets/img/${parseInt(item.State_ID)}.png`}  style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>{item.State_Name}</span>
{/* icon */}
<div className='flex gap-2 justify-content-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-1 h-1">
<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>


</div>
<span className='text-xs bg-green-500 text-white px-2 py-2 '>{
item.usercount}</span>
{/* <img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/> */}
<Link to={`/registrars-list/${item.State_ID}`}>
<span className='text-green-500 text-xs font-bold'>view registrars</span>
</Link>

</div>
</div>

)
})
}





        


          
           

         

           
         

    </div>
    </>
  )
}

export default Registrars;