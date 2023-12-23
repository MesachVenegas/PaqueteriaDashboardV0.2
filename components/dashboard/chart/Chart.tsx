'use client'

import { ChartProps } from '@/app/libs/definitions';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ data } : { data: ChartProps[] }) {

  return (
    <div className='flex flex-col gap-5 w-full h-[600px] p-5 bg-slate-200 dark:bg-slate-950 rounded-lg'>
      <h2 className='font-medium text-gray-500'>Clientes por mes</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month"/>
          <YAxis/>
          <Tooltip/>
          <Area type="bump" dataKey="clientes" stroke="#5D97F5" fill="#5D97F5" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
