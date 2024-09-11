import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { paymentData } from './fake_data_charts';

const PaymentAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        width={500}
        height={400}
        data={paymentData}
        margin={{
          top: 0,
          right: 10,
          left: 40,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="3%" stopColor="#1FC7EC" stopOpacity={1} />
            <stop offset="95%" stopColor="#1FC7EC" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          orientation='bottom'
          label={{
            value: 'الاشهر',
            position: 'center',
            fontSize: 24,
            fill: 'black',
          }}
        />
        <YAxis
          label={{
            value: 'إجمالي  المدفوعات',
            angle: -90,
            position: 'left',
            offset: 25,
            fontSize: 24,
            fill: 'black',
          }}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="payments"
          stroke="#39BED1"
          fill="url(#colorGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PaymentAreaChart;
