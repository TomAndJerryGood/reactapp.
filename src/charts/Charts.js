import React from "react";
import { PieChart, Pie, Cell, LabelList } from "recharts";

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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function CompPie() {
  return (
    <PieChart width={1000} height={800}
          // width, height 크기 제어 필요 없음
          // outerRadius 를 이용하여 크기 제어 
    >
      <Pie
        dataKey="value2"
        startAngle={0}
        endAngle={90}
        // chart가 애니메이션 되는 각도
        data={data}
        cx={200}
        cy={200}
        outerRadius={160}
        innerRadius={80}
        fill="#8884d8"
        labelLine={false}
        // label // 숫자
      >
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))
        }
        <LabelList dataKey="value2"  position="inside" />
      </Pie>  
    </PieChart>
  );
}
