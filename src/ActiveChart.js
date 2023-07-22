import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';



  export default function App({active01, active02, active03, active04, active05, active06, active07}) {
    const data = [
      {
        name: '2023.01',
        active: active01
      },
  
      {
          name: '2023.02',
          active: active02
        },
  
        {
          name: '2023.03',
          active: active03 
        },
  
        {
          name: '2023.04',
          active: active04
        },
  
        {
          name: '2023.05',
          active: active05
        },
  
        {
          name: '2023.06',
          active: active06
        },
  
        {
          name: '2023.07',
          active: active07
        },
  
      
    ];
    return (
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="active" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }