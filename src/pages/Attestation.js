import React,{useEffect,useState} from 'react'
// import { Chart } from 'primereact/chart';
import './admin.css';
import Gender from '../components/AttestChart/Gender';
import AttestU5 from '../components/AttestChart/AttestU5';
import AttestLine from '../components/AttestChart/AttestLine';
import authFetch from '../axios';
// import male from "../assets/images/man.svg"
// import female from "../assets/images/woman.svg"
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
//   } from "recharts";
const Attestation = () => {
    const [rez,setRez] = useState(0);
    // const doughnutData = {
    //     labels: ['A', 'B', 'C'],
    //     datasets: [
    //         {
    //             data: [300, 50, 100],
    //             backgroundColor: [
    //                 "#e2841a",
    //                 "#0F97C7",
    //                 "#10b163"
    //             ],
    //             hoverBackgroundColor: [
    //                 "#edb575",
    //                 "#6fc0dd",
    //                 "#6fd0a1"
    //             ]
    //         }]
    // };

 

    // const bar3Data = {
    //     labels: ['Male','Female'],
    //     datasets: [{
    //         label:'Gender',
    //        data: [20, 40,],
    //        backgroundColor: ["#0A5CAC","#FEA93B"], 
    //        borderRadius:50,
    //        barThickness: 30,
    //     }]
    // };
    // const bar2Data = {
    //     labels: ['9-17','18-26','27-35','36-50','51 above'],
    //     datasets: [{
    //         label:'States',
    //        data: [20, 40, 60,34,27],
    //        backgroundColor: ["#248129"], 
    //        borderRadius:50,
    //        barThickness: 30,
    //     }]
    // };

//     const bar2Data = [
//         {name: '9-17',
//         uv: 40,
//         pv: 2400,
//       },
//       {name: '18-26',
//       uv: 20,
//       pv: 2400,
//     },
//     {name: '27-35',
//     uv: 22,
//     pv: 2400,
//   }
//   ,
//   {name: '36-50',
//   uv: 10,
//   pv: 2400,
// },
// {name: '51 above',
// uv: 48,
// pv: 2400,
// }
//     ]

    // const data = {
    //     labels: ['0-5 years','6-10 years','11-17 years'],
    //     datasets: [{
    //         label:'Age',
    //        data: [20, 40, 60],
    //        backgroundColor: ["#2F96FB","#FEA93B","#0A5CAC"], 
    //        borderRadius:50,
    //        barThickness: 30,
    //     }]
    //  }



    // const barData2 = {
    //     labels: ['0-5 years', '6-10 years', '11-17 years'],
    //     datasets: [
    //         {
    //             label: '0-5 years',
    //             backgroundColor: '#2F96FB',
    //             borderColor: '#2F96FB',
    //             data: [65],
    //             borderRadius:50
    //         }, 
            // {
            //     label: '6-10 years',
            //     backgroundColor: '#FEA93B',
            //     borderColor: '#FEA93B',
            //     data: [28],
            //     borderRadius:50
            // }

            // , {
            //     label: '11-17 years',
            //     backgroundColor: '#0A5CAC',
            //     borderColor: '#0A5CAC',
            //     data: [18],
            //     borderRadius:50
            // }
        // ]
        // ,
        // datasets: [
         
        //     {
        //         label: '6-10 years',
        //         backgroundColor: '#FEA93B',
        //         borderColor: '#FEA93B',
        //         data: [28],
        //         borderRadius:50
        //     }
        // ]
    // };

    // let horizontalOptions = {
    //     indexAxis: 'y',
    //     maintainAspectRatio: false,
    //     aspectRatio: 2,
    //     plugins: {  
    //     legend: {
    //         // labels: {
    //         //     color: "red",
    //         //     fontSize: 18,
    //         //     backgroundColor:'green',
    //         // }
    //         display:false
    //     }
    // },
    //     scales: {
    //         y: {
    //             grid: {
    //                 display: false,
    //               }
    //         },
    //         x: {
    //             grid: {
    //               display: false,
    //             }
    //           },
    //       }
      
    // };


    useEffect(() => {
  
        const getStatz=async()=>{
        
            try {
                const statistics = await authFetch.get('https://npc-cert.verxid.site/v0/birth-attestation/stats/total');
        // console.log(statistics.data);
        setRez(statistics.data);
            } catch (error) {
                console.log(error)
            }
        }
        
        getStatz();
             
        }, [])

    
  return (
    <>
    <div className="grid my-3">
          <div className="col-12  bg-green-700">
          <span className="text-0 font-bold text-sm">Total Attestations: {rez}</span> 
          </div>
        

      



        <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Birth Attestation by Gender</div>
                      
                    </div>

                    {/* <Chart type="doughnut" data={doughnut} style={{  width: '50%',margin:'0 auto' }}  /> */}
<Gender/>
                    {/* <div className='bel flex flex-column'>
<div className='flex flex-column '>
<div className='flex justify-content-between'>
<p className='text-blue-400 text-xs font-bold'>male</p>
<p className='text-blue-400 text-xs font-bold'>1500</p>
</div>
<div className='border-y-3 border-blue-400 border-round-sm text-xs text-white p-1'>

</div>
</div>

<div className='flex flex-column '>
<div className='flex justify-content-between'>
<p className='text-yellow-400 text-xs font-bold'>female</p>
<p className='text-yellow-400 text-xs font-bold'>500</p>
</div>
<div className='border-y-3 border-yellow-400 border-round-sm text-xs text-white p-1 '>

</div>
</div>

                    </div> */}
                </div>
            </div>

            <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Birth Attestations by Age</div>
                     
                    </div>

                    {/* <Chart type="bar" data={barData} options ={basicOptions} /> */}
                    <AttestU5/>
                </div>
            </div>
        {/* <div className="col-12 md:col-6  py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Statistics by Age</div> 
                    </div>
                    <Chart type="bar" data={data}  options={horizontalOptions} />
                </div>
            </div> */}


      


          

            {/* <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Mother's age at birth</div>
                     
                    </div>

                    
                    <ResponsiveContainer width="100%" height={480}>
      <BarChart data={bar2Data} 
      margin={{ top: 50 }}
      >
       
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <defs>
        <linearGradient
          id="colorUv"
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          spreadMethod="reflect"
        >   
          <stop offset="0" stopColor="#15612B" />
          <stop offset="1" stopColor="#4BD024" />
        </linearGradient>
      </defs>
        <Bar dataKey="uv" fill="url(#colorUv)" barSize={30} radius={[15, 15, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
                </div>
            </div> */}

         
            <div className="col-12 md:col-12 lg:col-12 mx-auto py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Birth attestation by state</div>
                      
                    </div>

                   <AttestLine/>
                  
                </div>
            </div>

    </div>
    </>
  )
}

export default Attestation;