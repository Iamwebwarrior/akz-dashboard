import "./charts.css";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'jan',
    "active users":4000,
  },
  {
    name: 'feb',
    "active users":2000,
  },
  {
    name: 'mar',
    "active users":400,
  },
  {
    name: 'apr',
    "active users":4000,
  },
  {
    name: 'may',
    "active users":1200,
  },
  {
    name: 'jun',
    "active users":22000,
  },
  {
    name: 'jul',
    "active users":1000,
  },
  
];


function Charts() {
   
  return (
    <div>
       <ResponsiveContainer width="100%" aspect={ 4/1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
           <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="active users" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts
