import React,{useState,useEffect} from 'react'
// import { Chart } from 'primereact/chart';
import './admin.css';
import Doughnut from '../components/stillChart/Doughnut';
import MotherAge from '../components/stillChart/MotherAge';
import AgeStat from '../components/stillChart/AgeStat';
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
const Still = () => {
    const [rez,setRez] = useState(0);
// const lineRef= useRef(null);


    // const lineData = {
    //     labels: ['Child birth complications', 'Disorder of digestive system', 'Disorder of nervous system', 'Not stated', 'Injuries', 'Disorder of respiratory', 'Others'],
    //     datasets: [
    //         {
    //             label: '',
    //             data: [65, 59, 80, 81, 56, 55, 40],
    //             // fill: false,
    //             borderColor: 'blue',
    //             tension: .4,
    //             backgroundColor:'blue',
             
    //         },
          
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
    //     labels: ['Borno','Abuja','Nasarawa','Kano','Lagos','Kaduna'],
    //     datasets: [{
    //         label:'States',
    //        data: [20, 40, 60,34,55,23],
    //        backgroundColor: ["#29F683"], 
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

    //  const doughnut =    {
    //  labels: ['male', 'female'],
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
    //     // scales: {
    //     //     xAxes: [{
    //     //         barPercentage: 0.4
    //     //     }]
    //     // }
      
    // };

    useEffect(() => {
  
        const getStatz=async()=>{
        
            try {
                const statistics = await authFetch.get('https://npc-cert.verxid.site/v0/stillbirth/stats/total');
        console.log(statistics.data);
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
          <span className="text-0 font-bold text-sm">Total Still birth: {rez}</span> 
          </div>
        

        {/* <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-blue-dark shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Pending Attestations</span>
                        <div className="text-0 font-medium text-xl">152</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
               
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-blue-light shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Approved Attestations</span>
                        <div className="text-0 font-medium text-xl">$2.100</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
               
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-darkness shadow-2 p-3 border-round ">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Printed Certificates</span>
                        <div className="text-0 font-medium text-xl">28441</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
               
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-redz shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Queried Attestations</span>
                        <div className="text-0 font-medium text-xl">152 Unread</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
               
            </div>
        </div> */}


        <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Still Birth by Gender</div>
                      
                    </div>

                    <Doughnut/>
                </div>
            </div>

            <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Statistics by Type of Delivery</div>
                     
                    </div>

                   <AgeStat/>
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
                        <div className="text-900 font-medium">Mother's age at birth</div>
                      
                    </div>
                  <MotherAge/>
                </div>
            </div>


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

export default Still;