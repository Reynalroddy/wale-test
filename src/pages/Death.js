import React,{useState,useEffect} from 'react'
// import { Chart } from 'primereact/chart';
import './admin.css';
import male from "../assets/images/man.svg"
import female from "../assets/images/woman.svg"
import DeathAgeStat from '../components/DeathChart.js/DeathAgeStat';
import DeathByAge from '../components/DeathChart.js/DeathByAge';
import DeathSexBar from '../components/DeathChart.js/DeathSexBar';
import State from '../components/DeathChart.js/State';
import authFetch from '../axios';
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
//   } from "recharts";
const Death = () => {
    const [rez,setRez] = useState(0);
    useEffect(() => {
  
        const getStatz=async()=>{
        
            try {
                const statistics = await authFetch.get('https://npc-cert.verxid.site/v0/death-registration/stats/total-death');
        console.log(statistics);

        setRez(statistics.data);
            } catch (error) {
                console.log(error)
            }
        }
        
        getStatz();
             
        }, [])
    // const lineData = {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [ 
    //         { 
    //             label: '',
    //             data: [65, 59, 80, 81, 56, 55, 40],
    //             // fill: false,
    //             // borderColor: '#004E93',
    //             tension: .4,
    //             backgroundColor:'#B5E8A3',
    //             // fill: true
    //             fill: {
    //                 target: 'origin',
    //                 above: 'rgb(181, 232, 163,0.5)',  
    //                 // below: '#B5E8A3'    
    //               }
    //         },
    //         {
    //             label: 'Second Dataset',
    //             data: [28, 48, 40, 19, 86, 27, 90],
    //             fill: false,
    //             borderColor: '#027EC9',
    //             tension: .4
    //         }
    //     ]
    // };
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

    // const barData = {
    //     labels: ['Under 18','19-25','26-35','36-45','46-55','56-over'],
    //     datasets: [{
    //         label:'Death',
    //        data: [20, 40, 60,34,55,23],
    //        backgroundColor: ["#29F683"], 
    //        borderRadius:50,
    //        barThickness: 30,
           
    //     }],
    // } 
    
    // const barDats = {
    //     labels: ['Borno','Abuja','Nasarawa','Kano','Lagos','Kaduna'],
    //     datasets: [{
    //         label:'Death',
    //        data: [20, 40, 60,34,55,23],
    //        backgroundColor: ["#2F95FB"], 
    //        borderRadius:50,
    //        barThickness: 30,
           
    //     }],
    // } 

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



    //  const doughnut =    {
    //  labels: ['Birth', 'Death'],
    //  datasets: [
    //      {
    //          data: [300, 50],
    //          backgroundColor: [
    //              "#2F96FB",
    //              "#FEA93B",
                
    //          ],
    //         }
    //     ],
        
    // }

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

    // let basicOptions = {
    //     aspectRatio: 2,
    //     maintainAspectRatio: false,
    //     plugins: {  
    //         legend: {
    //             // labels: {
    //             //     color: "red",
    //             //     fontSize: 18,
    //             //     backgroundColor:'green',
    //             // }
    //             display:false
    //         }
    //     },
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


  return (
        <>
        <div className="grid my-3">
              <div className="col-12  bg-green-700">
              <span className="text-0 font-bold text-sm">Total Death Registrations: {rez}</span> 
              </div>
            
    
           
            <div className="col-12 md:col-6  py-4">
                    <div className="surface-card shadow-2 border-round p-3">
                        <div className="flex align-items-center justify-content-between mb-3">
                            <div className="text-900 font-medium">Major causes of death</div> 
                        </div>
                       <DeathAgeStat/>
                    </div>
                </div>
    
    
          
    
    
                <div className="col-12 md:col-6 lg:col-6 py-4">
                    <div className="surface-card shadow-2 border-round p-3">
                        <div className="flex align-items-center justify-content-between mb-3">
                            <div className="text-900 font-medium">Death by Age</div>
                         
                        </div>
    
                        {/* <Chart type="bar" data={barData} options ={basicOptions} /> */}
                        <DeathByAge/>
                    </div>
                </div>

                <div className="col-12 md:col-8 lg:col-8 py-4">
                    <div className="surface-card shadow-2 border-round p-3">
                        <div className="flex align-items-center justify-content-between mb-3">
                            <div className="text-900 font-medium">Death by States</div>
                         
                        </div>
    
                        {/* <Chart type="bar" data={barDats} options ={basicOptions} /> */}
                        <State/>
                    </div>
                </div>

                <div className="col-12 md:col-4 lg:col-4 py-4">
                    <div className="surface-card shadow-2 border-round p-3">
                        <div className="flex align-items-center justify-content-between mb-3">
                            <div className="text-900 font-medium">Death by Gender</div>
                         
                        </div>
    
                        {/* <Chart type="bar" data={bar3Data} options ={basicOptions} width="100%" /> */}
                        <DeathSexBar/>
                        <div className='flex  justify-content-between'>
                        <div className='flex gap-2'>
                        <img src={male} className='' style={{width:'9px'}} alt=''/>
                        <p className='text-sm'>Male</p>
                        </div>
    
                        <div className='flex gap-2 '>
                        <img src={female} className='' style={{width:'14px'}} alt=''/>
                        <p className='text-sm'>Female</p>
                        </div>
    
    
                    </div>
                    </div>
    
                   
                </div>
    
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
                </div>  */}
    
                {/* <div className="col-12 md:col-6 lg:col-6 py-4">
                    <div className="surface-card shadow-2 border-round p-3">
                        <div className="flex align-items-center justify-content-between mb-3">
                            <div className="text-900 font-medium">Birth vs Death registration</div>
                          
                        </div>
    
                        <Chart type="doughnut" data={doughnut} style={{  width: '50%',margin:'0 auto' }}  />
    
                        <div className='bel flex flex-column'>
    <div className='flex flex-column '>
    <div className='flex justify-content-between'>
    <p className='text-blue-400 text-xs font-bold'>Birth</p>
    <p className='text-blue-400 text-xs font-bold'>1500</p>
    </div>
    <div className='border-y-3 border-blue-400 border-round-sm text-xs text-white p-1'>
    
    </div>
    </div>
    
    <div className='flex flex-column '>
    <div className='flex justify-content-between'>
    <p className='text-yellow-400 text-xs font-bold'>Death</p>
    <p className='text-yellow-400 text-xs font-bold'>500</p>
    </div>
    <div className='border-y-3 border-yellow-400 border-round-sm text-xs text-white p-1 '>
    
    </div>
    </div>
    
                        </div>
                    </div>
                </div> */}
             
                {/* <div className="col-12 md:col-6 lg:col-8 py-4">
                    <div className="surface-card shadow-2 border-round p-3">
                        <div className="flex align-items-center justify-content-between mb-3">
                            <div className="text-900 font-medium">Birth by place occurence</div>
                          
                        </div>
    
                        <Chart type="line" data={lineData}   className='my-chart'/>
                    </div>
                </div> */}
    
    
                {/* <div className="col-12 md:col-6 lg:col-4 py-4">
                    <div className="surface-card shadow-2 border-round p-3">
                        <div className="flex align-items-center justify-content-between mb-3">
                            <div className="text-900 font-medium">Birth by Gender</div>
                         
                        </div>
    
                        <Chart type="bar" data={bar3Data} options ={basicOptions} width="100%" />
                        <div className='flex  justify-content-between'>
                        <div className='flex gap-2'>
                        <img src={male} className='' style={{width:'9px'}}/>
                        <p className='text-sm'>Male</p>
                        </div>
    
                        <div className='flex gap-2 '>
                        <img src={female} className='' style={{width:'14px'}}/>
                        <p className='text-sm'>Female</p>
                        </div>
    
    
                    </div>
                    </div>
    
                   
                </div> */}
    
    
                   
               
    
        </div>
        </>
      )
    }

export default Death