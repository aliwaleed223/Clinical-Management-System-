import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import transactions from '../fake-transactions';

const BillingChart = () => {
  return (
      <ResponsiveContainer height={500}>
        <LineChart
          data={transactions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="total"/>
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="quantity"
            name='كمية'
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="total" name='الاجمالي' stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  );
};

export default BillingChart;
