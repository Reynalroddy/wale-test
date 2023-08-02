import React,{useEffect,useState} from 'react'
// import { Chart } from 'primereact/chart';
import authFetch from '../../axios';
import Loading from '.././Loading';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
 
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
const MotherAge = () => {
   
    // eslint-disable-next-line
    const [chartData, setChartData]  = useState({});
    const [load, setLoad]  = useState(true);
    const chart = () => {
      
        authFetch.get("https://npc-cert.verxid.site/v0/stillbirth/stats/by-mother-age")
        .then(res => {
            console.log(res.data);
            setLoad(false);
          

            setChartData(
               res.data
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
    <ResponsiveContainer width="100%" height={480}>
    <BarChart data={chartData} 
    margin={{ top: 50 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3 " /> */}
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
  )
}

export default MotherAge