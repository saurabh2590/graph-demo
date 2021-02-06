import React from "react";
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {ValuePlusMinus} from "./ValuePlusMinus";

type LineChartProps = {}
export const LineChartDemo: React.FC<LineChartProps> = () => {
  const data = [
    {month: '9', value: 1000, mustSell: 700, mustBuy: 260, valueError: [75, 20]},
    {month: '10', value: 300, mustSell: 700, mustBuy: 260, valueError: [90, 40]},
    {month: '11', value: 280, mustSell: 700, mustBuy: 260, valueError: 40},
    {month: '12', value: 200, mustSell: 700, mustBuy: 260, valueError: 20},
    {month: '1', value: 278, mustSell: 700, mustBuy: 260, valueError: 28},
    {month: '2', value: 189, mustSell: 700, mustBuy: 260, valueError: [90, 20]},
    {month: '3', value: 189, mustSell: 700, mustBuy: 260, valueError: [28, 40]},
    {month: '4', value: 189, mustSell: 700, mustBuy: 260, valueError: 28},
    {month: '5', value: 189, mustSell: 700, mustBuy: 260, valueError: 28},
  ]
  return (
    <div>

      <LineChart width={730} height={250} data={data}
                 margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="month"/>
        <YAxis orientation="right"/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="value" stroke="#82ca9d"/>
        <Line type="monotone" dataKey="mustBuy" stroke="#82ca9d"/>
        <Line type="monotone" dataKey="mustSell" stroke="#82ca9d"/>
      </LineChart>
      <ValuePlusMinus value={10} label="Sell" checked={false} increment={() => {}} decrement={() => {}}/>
      <ValuePlusMinus value={10} label="Buy" checked={false} increment={() => {}} decrement={() => {}}/>
    </div>
  )
}
