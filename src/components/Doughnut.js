import React,{useState,useEffect} from 'react'
import { Chart } from 'primereact/chart';
import '../pages/admin.css';
import authFetch from '../axios';
import Loading from './Loading';
const Doughnut = () => {


       const [chartData, setChartData]  = useState({});
       const [load, setLoad]  = useState(true);
       const [dats, setDats]  = useState();
       const chart = () => {
         let illi;
         let lit;
           authFetch.get("https://npc-cert.verxid.site/v0/mother/stats/mother-literacy")
           .then(res => {
               console.log(res.data);
               setLoad(false);
               setDats(res.data)
             illi= res.data[0].illiterate;
             lit=res.data[0].literate;
   
               setChartData(
                {
                    labels: ['Illiteracy', 'Literate'],
                    datasets: [
                        {
                            data: [illi, lit],
                            backgroundColor: [
                                "#2F96FB",
                                "#FEA93B",
                               
                            ],
                           }
                       ],
                       
                   }
               )
       })
       .catch(err =>{
           console.log(err);
       })
   }
       useEffect(() => {
         
       chart();
       }, [])
       if(load){
           return (
               <Loading/>
           )
               }
  return (
   <>
     <Chart type="doughnut" data={chartData} style={{  width: '50%',margin:'0 auto' }}  />
     {dats &&
<div className='bel flex flex-column'>
<div className='flex flex-column '>
<div className='flex justify-content-between'>
<p className='text-blue-400 text-xs font-bold'>literate</p>
<p className='text-blue-400 text-xs font-bold'>{dats&& dats[0].Literate}</p>
</div>
<div className='border-y-3 border-blue-400 border-round-sm text-xs text-white p-1'>

</div>
</div>



<div className='flex flex-column '>
<div className='flex justify-content-between'>
<p className='text-yellow-400 text-xs font-bold'>Illiterate</p>
<p className='text-yellow-400 text-xs font-bold'>{dats && dats[0].Illiterate}</p>
</div>
<div className='border-y-3 border-yellow-400 border-round-sm text-xs text-white p-1 '>

</div>
</div>

</div>
}
   </>

  )
}

export default Doughnut