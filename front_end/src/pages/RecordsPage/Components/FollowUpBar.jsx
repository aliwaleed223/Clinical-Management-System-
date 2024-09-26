import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const FollowUpBar = ({ data }) => {
  return (
    <ResponsiveContainer height={400}>
      <BarChart
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
        <XAxis dataKey="patient" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="paid" fill="#00C49F" name="مدفوعة" />
        <Bar dataKey="unpaid" fill="#DC3912" name="غير مدفوعة" />
        <Bar dataKey="back" fill="#FFBB28" name="مرتجع" />
        <Bar dataKey="total" fill="#A55CFF" name="الاجمالي" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FollowUpBar;
