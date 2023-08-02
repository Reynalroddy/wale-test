// import React from 'react'
import React,{useEffect,useState} from 'react'
import { Chart } from 'primereact/chart';
import '../pages/admin.css';
import authFetch from '../axios';
import Loading from './Loading';
const GenderStat = () => {
    const [chartData, setChartData]  = useState({});
    const [load, setLoad]  = useState(true);
    const chart = () => {
        let birth ;
        let death ;
        let attest ;
        let still;
       
        authFetch.get("https://npc-cert.verxid.site/v0/birth-registration/stats/gender")
        .then(res => {
            console.log(res.data)
         setLoad(false);
                birth = res.data[0]['birthreg'];
                death=res.data[1]['deathreg'];  
                attest=res.data[2]['attestation'];
                still=res.data[3]['stillbirth'];
            setChartData(
                {
                    labels: ['Male','Female'],
                    datasets: [
                        {
                            type: 'bar',
                            label: 'Birth registration',
                            backgroundColor: '#4791FF',
                            data: birth,
                            borderRadius:50,
                            barThickness: 30,
                        },
                        {
                            type: 'bar',
                            label: 'Death registration',
                            backgroundColor: '#FFD35A',
                            data: death,
                            borderRadius:50,
                            barThickness: 30,
                        },
                        {
                            type: 'bar',
                            label: 'Birth attestation',
                            backgroundColor: 'red',
                            data:attest
                            ,
                            borderRadius:50,
                            barThickness: 30,
                           
                        },
                        {
                            type: 'bar',
                            label: 'Still Birth',
                            backgroundColor: 'purple',
                            data: still
                            ,
                            borderRadius:50,
                            barThickness: 30,
                           
                        },]
                }
            )
    }).catch(err =>{
        console.log(err);
    })
}
    useEffect(() => {
      
    chart();
    }, [])
  



    let stackedOptions = {
        maintainAspectRatio: false,
        aspectRatio: 1.2,
        indexAxis: 'y',
        plugins: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
    if(load){
        return (
            <Loading/>
        )
    }
  return (
    <Chart type="bar" data={chartData} options ={stackedOptions} width="100%" height={'150px'} />
  )
}

export default GenderStat;
