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
import { invoiceData } from './fake_data_charts';

const InvoiceBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={invoiceData}
        width="80%"
        margin={{
          top: 0,
          right: 10,
          left: 40,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          label={{
            value: 'الاشهر',
            position: 'center',
            fontSize: 24,
            fill: 'black',
          }}
        />
        <YAxis
          dataKey="invoices"
          label={{
            value: 'إجمالي  الفواتير',
            angle: -90,
            position: 'left',
            offset: 25,
            fontSize: 24,
            fill: 'black',
          }}
        />
        <Tooltip />
        <Bar
          activeBar={<Rectangle fill="gold" stroke="blue" />}
          dataKey="invoices"
          fill="#39BED1"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default InvoiceBarChart;
