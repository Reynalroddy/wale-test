import React,{useEffect,useState} from 'react'
import { Chart } from 'primereact/chart';
import './admin.css';
import male from "../assets/images/man.svg"
import female from "../assets/images/woman.svg"
import naija from "../assets/images/naija.png"
// import round from "../assets/images/Eclipse.png"
// import rect from "../assets/images/rect.png"
// import { Divider } from 'primereact/divider';
import YearlyReg from '../components/YearlyReg';
import RegStat from '../components/RegStat';
import GenderStat from '../components/GenderStat';
import authFetch from '../axios';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
   
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
const Main = () => {
    const [rez,setRez] = useState({});
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

    const bar2Data = [
        {name: '9-17',
        uv: 40,
        pv: 2400,
      },
      {name: '18-26',
      uv: 20,
      pv: 2400,
    },
    {name: '27-35',
    uv: 22,
    pv: 2400,
  }
  ,
  {name: '36-50',
  uv: 10,
  pv: 2400,
},
{name: '51 above',
uv: 48,
pv: 2400,
}
    ]

  

     const doughnut =    {
     labels: ['Accident', 'Illness','others'],
     datasets: [
         {
             data: [80, 50,30],
             backgroundColor: [
                 "#FEBC31",
                 "#99DA01",
                 "#83F3FF"
                
             ],
            }
        ],
        
    }

    const doughnut2 =    {
        labels: ['Birth', 'Death'],
        datasets: [
            {
                data: [1662000, 0],
                backgroundColor: [
                    "#2F96FB",
                    "#FEA93B",
                   
                ],
               }
           ],
           
       }

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
      
      
    // };

    useEffect(() => {
  
        const getStatz=async()=>{
        
            try {
                const statistics = await authFetch.get('https://npc-cert.verxid.site/v0/birth-registration/stats/dcr-registras-dashboard-stat');
        console.log(statistics.data);
        setRez(statistics.data[0]);
            } catch (error) {
                console.log(error)
            }
        }
            
        getStatz();
        }, [])
        
        
        
    
  return (
    <>
    <div className="grid my-3">
         <div className="col-12 md:col-6 lg:col-3">
        <div className="bg-white shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block  text-sm font-medium  mb-3">Total Birth Registrations</span>
                        <div className=" font-bold text-xl">{rez && rez.birth_registration?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}</div>
                        <div className='flex mt-2'>
                        <i className="pi pi-arrow-up text-green-500 text-xs font-bold"></i>
                        <span className='text-xs text-green-500 font-bold'>4.6%</span>
                        </div>
                        
                    </div>
                    <div className="flex align-items-center justify-content-center " style={{ width: '2.8rem', height: '2.8rem' }}>
                       <img src={naija} className='w-full' alt='' />
                        
                    </div>
                </div>
                
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-white shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block  text-sm font-medium  mb-3">Total Death Registrations</span>
                        <div className=" font-bold text-xl">{rez && rez.death_registrations?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                        <div className='flex mt-2'>
                        <i className="pi pi-arrow-up text-green-500 text-xs font-bold"></i>
                        <span className='text-xs text-green-500 font-bold'>4.6%</span>
                        </div>
                        
                    </div>
                    <div className="flex align-items-center justify-content-center " style={{ width: '2.8rem', height: '2.8rem' }}>
                       <img src={naija} className='w-full' alt='' />
                        
                    </div>
                </div>
               
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
        <div className="bg-white shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block  text-sm font-medium  mb-3">Total Birth Attestations</span>
                        <div className=" font-bold text-xl">{rez && rez.birth_attestation?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                        <div className='flex mt-2'>
                        <i className="pi pi-arrow-up text-green-500 text-xs font-bold"></i>
                        <span className='text-xs text-green-500 font-bold'>4.6%</span>
                        </div>
                        
                    </div>
                    <div className="flex align-items-center justify-content-center " style={{ width: '2.8rem', height: '2.8rem' }}>
                       <img src={naija} className='w-full' alt='' />
                       
                    </div>
                </div>
                
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
        <div className="bg-white shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block  text-sm font-medium  mb-3">Total Approved Certificates</span>
                        <div className=" font-bold text-xl">{rez && rez.verified_cetificates?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                        <div className='flex mt-2'>
                        <i className="pi pi-arrow-up text-green-500 text-xs font-bold"></i>
                        <span className='text-xs text-green-500 font-bold'>4.6%</span>
                        </div>
                        
                    </div>
                    <div className="flex align-items-center justify-content-center " style={{ width: '2.8rem', height: '2.8rem' }}>
                       <img src={naija} className='w-full' alt='' />
                       
                    </div>
                </div>
                
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Yearly Registration Statistics</div>
                      
                    </div>

                    {/* <Chart type="line" data={lineData} ref={lineRef}  className='my-chart'/> */}
                    <YearlyReg/>
                </div>
            </div>
        <div className="col-12 md:col-6 lg:col-6  py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Regional Registration Statistics</div> 
                    </div>
                    {/* <Chart type="bar" data={data}   /> */}
                    <RegStat/>
                </div>
            </div>


            <div className="col-12 md:col-6 lg:col-7 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Gender Registration Statistics</div>
                     
                    </div>

                    {/* <Chart type="bar" data={bar3Data} options ={stackedOptions} width="100%" height={'150px'} /> */}
                    <GenderStat/>
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


            {/* <div className="col-12 md:col-6 lg:col-5 py-4"> 
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        
                       
                    </div>
                     <div className='flex gap-2 flex-column align-items-center '>
                     <div className="text-900  text-sm font-medium text-center">Top 3 States in Birth Registration</div>
                    <div className='flex flex-column md:flex-row gap-3  '>
                    <div className='flex gap-2 flex-column'>
<img  src={round} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1 text-sm'>78.3</span></span>
</div>
<div className='flex gap-2 flex-column'>
<img  src={round} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1'>78.3</span></span>
</div>
<div className='flex gap-2 flex-column'>
<img  src={round} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1'>78.3</span></span>
</div>

                    </div>
                    <Divider layout="" />

                    <div className="hidden text-900 text-sm font-medium md:block">Top 3 States in Death Registration</div>
                    <div className='flex gap-3 justify-content-center '>
                    <div className='flex gap-2 flex-column'>
                        
<img  src={rect} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1 text-sm'>78.3</span></span>
</div>
<div className='flex gap-2 flex-column'>
<img  src={rect} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1'>78.3</span></span>
</div>
<div className='flex gap-2 flex-column'>
<img  src={rect} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1'>78.3</span></span>
</div>

                    </div>
                    </div> 
                    
                    
                </div>
            </div> */}
           
           <div className="col-12 md:col-5 lg:col-5 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Birth vs Death registration statistics</div>
                      
                    </div>

                    <Chart type="doughnut" data={doughnut2} style={{  width: '50%',margin:'0 auto' }}  />

                    <div className='bel flex flex-column'>
<div className='flex flex-column '>
<div className='flex justify-content-between'>
<p className='text-blue-400 text-xs font-bold'>Birth</p>
<p className='text-blue-400 text-xs font-bold'>{rez && rez.birth_registrations}</p>
</div>
<div className='border-y-3 border-blue-400 border-round-sm text-xs text-white p-1'>

</div>
</div>

<div className='flex flex-column '>
<div className='flex justify-content-between'>
<p className='text-yellow-400 text-xs font-bold'>Death</p>
<p className='text-yellow-400 text-xs font-bold'>0</p>
</div>
<div className='border-y-3 border-yellow-400 border-round-sm text-xs text-white p-1 '>

</div>
</div>

                    </div>
                </div>
            </div>

            <div className=" hidden md:block col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3" >
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Statistics of Death Registration by Age</div>
                     
                    </div>

                    <div style={{ width:'100%' }}>
                    <ResponsiveContainer width='100%' height={250}>
      <BarChart data={bar2Data} 
    //   margin={{ top: 50 }}
    width={350}
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
                </div>
            </div>

            <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Major Causes of Death Statistics</div>
                      
                    </div>

                    <Chart type="doughnut" data={doughnut} style={{  width: '50%',margin:'0 auto' }}  />

                 
                </div>
            </div>
         
         


          


               
           

    </div>
    </>
  )
}

export default Main