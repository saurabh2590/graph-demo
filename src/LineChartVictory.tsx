import {colors} from "@material-ui/core";
import React from "react";
import {VictoryAxis, VictoryChart, VictoryLine, VictoryTheme} from "victory";
import {ValuePlusMinus} from "./ValuePlusMinus";

type LineChartProps = {}
type ChartDataItem = {
  month: String;
  value: number; sell: number; mustBuy: number; neutral: number; mustSell: number; buy: number
}

export const LineChartVictoryDemo: React.FC<LineChartProps> = () => {

  const data: ChartDataItem[] = [
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
  const customAxis = (<>
    <line vector-effect="non-scaling-stroke" role="presentation" shape-rendering="auto" x1="50" x2="50" y1="50" y2="100" stroke="#f00"></line>
      <line vector-effect="non-scaling-stroke" role="presentation" shape-rendering="auto" x1="50" x2="50" y1="100" y2="300" stroke="#00f"></line>
  </>
  )
  return (
    <div>
      <defs>
        <linearGradient id="solids" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: "rgb(255,0,0)", stopOpacity: 1}}/>
          <stop offset="33%" style={{stopColor: "rgb(255,0,0)", stopOpacity: 1}}/>
          <stop offset="33%" style={{stopColor: "rgb(0,255,0)", stopOpacity: 1}}/>
          <stop offset="67%" style={{stopColor: "rgb(0,255,0)", stopOpacity: 1}} />
          <stop offset="67%" style={{stopColor: "rgb(0,0,255)", stopOpacity: 1}}/>
          <stop offset="100%" style={{stopColor: "rgb(0,0,255)", stopOpacity: 1}}/>
        </linearGradient>
      </defs>
      <VictoryChart
        theme={VictoryTheme.material}
      >

        <VictoryAxis dependentAxis
          theme={VictoryTheme.material}
                     axisComponent={customAxis}
                       style={{
                         tickLabels: {
                           color: colors.grey[50],
                           fill: colors.grey[50]
                         }
                       }}
                       standalone={true}
        />
        <VictoryLine
          style={{
            data: { stroke: "url(#solids)" },
            parent: { border: "1px solid #ccc"}
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
        />
      </VictoryChart>

      <ValuePlusMinus value={10} label="Sell" checked={false} increment={() => {
      }} decrement={() => {
      }}/>
      <ValuePlusMinus value={10} label="Buy" checked={false} increment={() => {
      }} decrement={() => {
      }}/>
    </div>
  )
}
