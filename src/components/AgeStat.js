import React,{useState,useEffect} from 'react'
import { Chart } from 'primereact/chart';
import '../pages/admin.css';
// import authFetch from 'authFetch';
import authFetch from '../axios';
import Loading from './Loading';
const AgeStat = () => {

    let horizontalOptions = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 2,
        plugins: {  
        legend: {
            // labels: {
            //     color: "red",
            //     fontSize: 18,
            //     backgroundColor:'green',
            // }
            display:false
        }
    },
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
          }
      
    };
    const [chartData, setChartData]  = useState({});
    const [load, setLoad]  = useState(true);
    const chart = () => {
      let labels=[];
      let count=[];
        authFetch.get("https://npc-cert.verxid.site/v0/birth-registration/stats/statistics-by-age")
        .then(res => {
            console.log(res.data);
            setLoad(false);
            for(const dataObj of res.data){
                labels.push(dataObj.name)
                count.push(dataObj.uv);  
            }
            setChartData(
                {
                    labels,
                    datasets: [{
                        label:'Age',
                       data: count,
                       backgroundColor: ["#2F96FB","#FEA93B","#0A5CAC"], 
                       borderRadius:50,
                       barThickness: 30,
                    }]
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
    <Chart type="bar" data={chartData}  options={horizontalOptions} />
  )
}

export default AgeStat