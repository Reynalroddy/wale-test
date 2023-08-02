import React,{useRef,useEffect,useState} from 'react'
import { Chart } from 'primereact/chart';
import '../pages/admin.css';
import authFetch from '../axios';
import Loading from './Loading';
const YearlyReg = ({data1,data2}) => {
    const lineRef= useRef(null);
    const [chartData, setChartData]  = useState({});
    const [load, setLoad]  = useState(true);
    const chart = () => {
        let deathReg = [];
        let birthReg = [];
        let birthAttest = [];
        let labels=[];
        let still=[];
        authFetch.get("https://npc-cert.verxid.site/v0/birth-registration/stats/year")
        .then(res => {
            console.log(res.data);
            setLoad(false);
            for(const dataObj of res.data){
                labels.push(dataObj.year)
                // deathReg.push(parseInt(dataObj.employee_salary));
                deathReg.push(dataObj.deathreg);
                // birthReg.push(dataObj.birth-reg);
                birthReg.push(dataObj.birthreg);
                birthAttest.push(dataObj.attestation);
                still.push(dataObj.stillbirth);
                // empAge.push(parseInt(dataObj.employee_age ));
            }

            setChartData(
                {
                    labels,
                    datasets: [
                        {
                            label: 'Death registrations',
                            data: deathReg,
                            // fill: false,
                            borderColor: '#6E00FF',
                            tension: .4,
                            backgroundColor:'#6E00FF',
                            // fill: true
                            // fill: {
                            //     target: 'origin',
                            //     above: 'rgb(181, 232, 163,0.5)',  
                            //     // below: '#B5E8A3'    
                            //   }
                        },
                        {
                            label: 'Birth registrations',
                            data: birthReg,
                            // fill: false,
                            borderColor: '#FFD35A',
                            tension: .4,
                            backgroundColor:'#FFD35A',
                            // fill: true
                            // fill: {
                            //     target: 'origin',
                            //     above: 'rgb(181, 232, 163,0.5)',  
                            //     // below: '#B5E8A3'    
                            //   }
                        },
                        {
                            label: 'Birth attestation',
                            data: birthAttest,
                            // fill: false,
                            borderColor: '#68A5FF',
                            tension: .4,
                            backgroundColor:'#68A5FF',
                            // fill: true
                            // fill: {
                            //     target: 'origin',
                            //     above: 'rgb(181, 232, 163,0.5)',  
                            //     // below: '#B5E8A3'    
                            //   }
                        },
                        {
                            label: 'Still Birth',
                            data: still,
                            // fill: false,
                            borderColor: 'purple',
                            tension: .4,
                            backgroundColor:'purple',
                            // fill: true
                            // fill: {
                            //     target: 'origin',
                            //     above: 'rgb(181, 232, 163,0.5)',  
                            //     // below: '#B5E8A3'    
                            //   }
                        },
                        
                    ]
                }
            )
    }).catch(err =>{
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

export default YearlyReg