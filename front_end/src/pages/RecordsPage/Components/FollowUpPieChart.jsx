import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const COLORS = {
  مدفوعة: '#00C49F', // Green
  'غير مدفوعة': '#DC3912', // Red
  مرتجع: '#FFBB28', // Yellow
  الاجمالي: '#A55CFF', // Purple
};

const calculateTotals = (data) => {
  let totalPaid = 0;
  let totalUnpaid = 0;
  let totalBack = 0;
  let total = 0;

  data.forEach((item) => {
    totalPaid += item.paid;
    totalUnpaid += item.unpaid;
    totalBack += item.back;
    total += item.total;
  });

  return [
    { name: 'مدفوعة', value: totalPaid, color: '#00C49F' }, // Green
    { name: 'غير مدفوعة', value: totalUnpaid, color: '#DC3912' }, // Red
    { name: 'مرتجع', value: totalBack, color: '#FFBB28' }, // Yellow
    { name: 'الاجمالي', value: total, color: '#A55CFF' }, // Purple
  ];
};


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const FollowUpPieChart = ({ data }) => {
  const chartData = calculateTotals(data);

  return (
    <ResponsiveContainer height={400}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label={renderCustomizedLabel}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FollowUpPieChart;
