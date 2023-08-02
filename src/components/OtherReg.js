
import React,{useEffect,useState} from 'react'
import { Chart } from 'primereact/chart';
import '../pages/admin.css';
import authFetch from '../axios';
import Loading from './Loading';
const OtherReg=()=>{
    // const data12 = {
    //     labels: ['Kano','Lagos','Gombe'],
    //     datasets: [
    //         {
    //         label:'0-1',
    //        data: [20, 40, 60],
    //        backgroundColor: "#BC5FD3", 
    //        borderRadius:50,
    //        barThickness: 10,
    //     },
    //     {
    //         label: '1-5',
    //         backgroundColor: '#FF7F2A',
    //         data: [65, 59, 80],
    //         borderRadius:50,
    //        barThickness: 10,
    //     },
    //     {
    //         label: '5-10',
    //         backgroundColor: '#008000',
    //         data: [28, 48, 40],
    //         borderRadius:50,
    //        barThickness: 10,
    //     },
    //     {
    //         label:'10-17',
    //        data: [20, 40, 60],
    //        backgroundColor: "#D40000", 
    //        borderRadius:50,
    //        barThickness: 10,
    //     },
    // ]
    //  }
    // const lineRef= useRef(null);
    const [chartData, setChartData]  = useState({});
    const [load, setLoad]  = useState(true);
    const chart = () => {
        let v1 ;
        let v2;
        let v3 ;
        let labels=[];
        let v4;
        authFetch.get("https://npc-cert.verxid.site/v0/birth-registration/stats/birth-reg-by-age-frequency-by-state")
        .then(res => {
            console.log(res.data);
            setLoad(false);
            // for(const dataObj of res.data.states){
            //     labels.push(dataObj)
            // }
            res.data.states.forEach(element =>  labels.push(element));


            for(const dataObj of res.data.dataSet){
                if(dataObj.label=== "0-1"){
v1=dataObj.value;
                }
                if(dataObj.label=== "1-5"){
                    v2=dataObj.value;
                                    }
                                    if(dataObj.label=== "5-10"){
                                        v3=dataObj.value;
                                                        }
                                                        if(dataObj.label=== "10-17"){
                                                            v4=dataObj.value;
                                                        }
            }

            console.log(labels);
            console.log(v1,v2,v3,v4);

            setChartData(
                 {labels,
                datasets: [
                    {
                    label:'0-1',
                   data: v1,
                   backgroundColor: "#BC5FD3", 
                   borderRadius:50,
                   barThickness: 10,
                },
                {
                    label: '1-5',
                    backgroundColor: '#FF7F2A',
                    data: v2,
                    borderRadius:50,
                   barThickness: 10,
                },
                {
                    label: '5-10',
                    backgroundColor: '#008000',
                    data: v3,
                    borderRadius:50,
                   barThickness: 10,
                },
                {
                    label:'10-17',
                   data: v4,
                   backgroundColor: "#D40000", 
                   borderRadius:50,
                   barThickness: 10,
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
    <Chart type="bar" data={chartData}   className='my-chart'/>
  )
}


export default OtherReg