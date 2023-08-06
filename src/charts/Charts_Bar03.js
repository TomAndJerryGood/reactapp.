import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";

const data = [
  {
    name: "html",
    value1 : 90,
    value2 : 99
  },
  {
    name: "css",
    value1 : 85,
    value2 : 100
  },
  {
    name: "javascript",
    value1 : 99,
    value2 : 72
  },
  {
    name: "react",
    value1 : 95,
    value2 : 66
  },
   
];

export default function CompeBar() {
  return (
    <BarChart width={730} height={350} data={data}
          barCategoryGap={50}
          // barGap={30}
          // barSize={50}
          // maxBarSize={20}

          margin={{
            top: 30
          }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" /> 
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value1" fill="#8884d8">
           <LabelList dataKey="value1" position="top" angle="45"  />
        </Bar>
        <Bar dataKey="value2" fill="#82ca9d">
            <LabelList dataKey="value2" position="top" />
        </Bar>
    </BarChart>
  );
}

/*
  svg : 선을 그리기 
  stroke : 선색
  fill : 
  stroke-width : 
  stroke-dash-array
*/