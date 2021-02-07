import React from "react";
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {ValuePlusMinus} from "./ValuePlusMinus";

type LineChartProps = {}
export const LineChartDemo: React.FC<LineChartProps> = () => {
  const NEUTRAL = "#ffffff";
  const MUST_SELL = "#00ff00";
  const SELL = "#82ca9d";
  const BUY = "#FF6600";
  const MUST_BUY = "#ff0000";

  const L_MUST_SELL = "Must Sell";
  const L_SELL = "Sell";
  const L_NEUTRAL = "Neutral";
  const L_BUY = "Buy";
  const L_MUST_BUY = "Must Buy";

  const data = [
    {month: '9', value: 1000, sell: 700, mustBuy: 260, neutral: 500, mustSell: 900, buy: 400},
    {month: '10', value: 300, sell: 700, mustBuy: 260, neutral: 500, mustSell: 900, buy: 400},
    {month: '11', value: 280, sell: 700, mustBuy: 260, neutral: 500, mustSell: 900, buy: 400},
    {month: '12', value: 200, sell: 700, mustBuy: 260, neutral: 500, mustSell: 900, buy: 400},
    {month: '1', value: 278, sell: 700, mustBuy: 260, neutral: 500, mustSell: 900, buy: 400},
    {month: '2', value: 189, sell: 700, mustBuy: 260, neutral: 500, mustSell: 900, buy: 400},
    {month: '3', value: 195, sell: 700, mustBuy: 260, neutral: 500, mustSell: 900, buy: 400},
    {month: '4', value: 400, sell: 700, mustBuy: 260, neutral: 500, mustSell: 900, buy: 400},
    {month: '5', value: 300, sell: 700, mustBuy: 260, neutral: 500, mustSell: 900, buy: 400},
  ];

  return (
    <div>
    <ResponsiveContainer height={400} width="100%">
      <LineChart data={data}
                 margin={{top: 10, right: 10, left: 10, bottom: 10}}>
        {/*<CartesianGrid strokeDasharray="3 3"/>*/}
        <XAxis dataKey="month"/>
        <YAxis orientation="right"/>
        <Line type="linear" name="Value" dataKey="value" stroke="#82ca9d" legendType="none"/>
        <Line type="linear" name={L_MUST_SELL} dataKey="mustSell" stroke={MUST_SELL} legendType="line" dot={false} strokeDasharray="5 5"/>
        <Line type="linear" name={L_SELL}dataKey="sell" stroke={SELL} legendType="line" dot={false} strokeDasharray="5 5"/>
        <Line type="linear" name={L_NEUTRAL} dataKey="neutral" stroke={NEUTRAL} legendType="line" dot={false} strokeDasharray="5 5"/>
        <Line type="linear" name={L_BUY} dataKey="buy" stroke={BUY} legendType="line" dot={false} strokeDasharray="5 5"/>
        <Line type="linear" name={L_MUST_BUY} dataKey="mustBuy" stroke={MUST_BUY} legendType="line" dot={false} strokeDasharray="5 5"/>
        <Legend layout="horizontal" verticalAlign="top" align="center"/>
      </LineChart>

    </ResponsiveContainer>
      <ValuePlusMinus value={10} label="Sell" checked={false} increment={() => {
      }} decrement={() => {
      }}/>
      <ValuePlusMinus value={10} label="Buy" checked={false} increment={() => {
      }} decrement={() => {
      }}/>
    </div>
  )
}
