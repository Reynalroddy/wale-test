import React,{useEffect,useState} from 'react'
import { Chart } from 'primereact/chart';
import authFetch from '../axios';
import Loading from './Loading';

const SexBar = () => {
    const [chartData, setChartData]  = useState({});
    const [load, setLoad]  = useState(true);
    const chart = () => {
        let arr ;
       
        authFetch.get("https://npc-cert.verxid.site/v0/birth-registration/stats/bygendercount")
        .then(res => {
            console.log(res.data);
            setLoad(false);
arr = [res.data[0].count,res.data[1].count]
console.log(arr);
            // for(const dataObj of res.data){
                // northCen=res.data[1]['North-Central'];
                // northEas=res.data[2]['North-East'];  
                // northWes=res.data[3]['North-West'];
                // southEas=res.data[4]['South-East'];
                // southSou=res.data[5]['South-South'];
                // southWes=res.data[6]['South-West'];
            //     // deathReg.push(parseInt(dataObj.employee_salary));
            //     deathReg.push(dataObj.deathreg);
            //     // birthReg.push(dataObj.birth-reg);
            //     birthReg.push(dataObj.birthreg);
            //     birthAttest.push(dataObj.attestation);
            //     still.push(dataObj.stillbirth);
            //     // empAge.push(parseInt(dataObj.employee_age ));
            // }

            setChartData(
                {
                    labels: ['Male','Female'],
                    datasets: [{
                        label:'Sex',
                       data: arr,
                       backgroundColor: ["#0A5CAC","#FEA93B"], 
                       borderRadius:50,
                       barThickness: 30,
                    }]
                }
                // {
                //     labels: ['Birth Registration','Death Registration','Birth Attestation','Still Birth'],
                //     datasets: [
                //         {
                //         label:'North Central',
                //        data: northCen,
                //        backgroundColor: "#BC5FD3", 
                //        borderRadius:50,
                //        barThickness: 15,
                //     },
                //     {
                //         label: 'North East',
                //         backgroundColor: '#FF7F2A',
                //         data: northEas,
                //         borderRadius:50,
                //        barThickness: 15,
                //     },
                //     {
                //         label: 'North West',
                //         backgroundColor: '#008000',
                //         data: northWes,
                //         borderRadius:50,
                //        barThickness: 15,
                //     },
                //     {
                //         label:'South East',
                //        data: southEas,
                //        backgroundColor: "#D40000", 
                //        borderRadius:50,
                //        barThickness: 15,
                //     },
                //     {
                //         label: 'South South',
                //         backgroundColor: '#D4AA00',
                //         data: southSou,
                //         borderRadius:50,
                //        barThickness: 15,
                //     },
                //     {
                //         label: 'South West',
                //         backgroundColor: '#0055D4',
                //         data: southWes,
                //         borderRadius:50,
                //        barThickness: 15,
                //     },
                // ]
                //  }
            )
    }).catch(err =>{
        console.log(err);
    })
}
    useEffect(() => {
      
    chart();
    }, [])

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
          }
    };
    if(load){
        return (
            <Loading/>
        )
            }
  return (
    <Chart type="bar" data={chartData} options ={basicOptions} width="100%" />
  )
}

export default SexBar