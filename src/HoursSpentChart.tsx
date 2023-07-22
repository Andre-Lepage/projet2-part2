import "./index.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";



const COLORS = ["#e9a6f3", "#8f30df"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, data }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${data[index].name+ ": " +(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function App({under10, ten50, fifty100, hundred500, fiveHundred1000, over1000}) {

  const data =[
    { name: "under 10", value: under10 },
    { name: "10-50", value: ten50 },
    { name: "50-100", value: fifty100},
    { name: "100-500", value: hundred500 },
    { name: "500-1000", value: fiveHundred1000 },
    { name: "over 1000", value: over1000 }
  ];
  return (
    <PieChart width={600} height={600}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) =>
          renderCustomizedLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, data })
        }
        outerRadius={200}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
