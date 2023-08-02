import React,{useState,useEffect} from 'react'
import { Chart } from 'primereact/chart';
import '../pages/admin.css';
import authFetch from '../axios';
import Loading from './Loading';


const U5 = () => {
    let basicOptions = {
        
        aspectRatio: 2,
        maintainAspectRatio: false,
        scales: {
            y: {
                grid: {
                    display: false,
                  }
            },
            x: {
                grid: {
                  display: false,
                }
              },
          },
          plugins: {
            legend: {
                display: false
            },
        }
        // scales: {
        //     xAxes: [{
        //         barPercentage: 0.4
        //     }]
        // }
      
    };

    const [chartData, setChartData]  = useState({});
    const [load, setLoad]  = useState(true);
    const chart = () => {
      let labels=[];
      let count=[];
        authFetch.get("https://npc-cert.verxid.site/v0/birth-registration/stats/under-5-aged-birthreg")
        .then(res => {
            console.log(res.data);
            setLoad(false);
            for(const dataObj of res.data){
                labels.push(dataObj.State_Name)
                count.push(dataObj.count);  
            }
            setChartData(
                {
                    labels,
                    datasets: [{
                       label:'',
                       data: count,
                       backgroundColor: ["#29F683"], 
                       borderRadius:50,
                       barThickness: 30,
                       color:'white',
                    },
                    
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
    <Chart type="bar" data={chartData} options ={basicOptions} />
  )
}

export default U5