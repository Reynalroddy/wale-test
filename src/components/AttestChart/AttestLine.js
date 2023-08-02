import React,{useState,useEffect,useRef} from 'react'
import { Chart } from 'primereact/chart';
import '../../pages/admin.css';
import authFetch from '../../axios';
import Loading from '../Loading';


const AttestLine = () => {

    const lineRef= useRef(null);



    const [chartData, setChartData]  = useState({});
    const [load, setLoad]  = useState(true);
    const chart = () => {
      let labels=[];
      let count=[];
        authFetch.get("https://npc-cert.verxid.site/v0/birth-attestation/stats/by-state")
        .then(res => {
            console.log(res.data);
            setLoad(false);
            for(const dataObj of res.data){
                labels.push(dataObj.State_Name.toLowerCase())
                count.push(dataObj.count);  
            }
            setChartData(
                {
                labels,
                datasets: [
                    {
                        label: '',
                        data: count,
                        // fill: false,
                        borderColor: 'blue',
                        tension: .4,
                        backgroundColor:'blue',
                        // fill: true
                        // fill: {
                        //     target: 'origin',
                        //     above: 'rgb(181, 232, 163,0.5)',  
                        //     below: '#B5E8A3'    
                        //   }
                    },
                    // {
                    //     label: 'Second Dataset',
                    //     data: [28, 48, 40, 19, 86, 27, 90],
                    //     fill: false,
                    //     borderColor: '#027EC9',
                    //     tension: .4
                    // }
                ]
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
    <Chart type="line" data={chartData} ref={lineRef}  className='my-chart'/>
  )
}

export default AttestLine