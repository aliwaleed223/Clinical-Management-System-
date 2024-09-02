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
import { patientData } from './fake_data_charts';

const PatientLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={patientData} margin={{ bottom: 10, left: 10 }}>
        <CartesianGrid />
        <XAxis
          dataKey="month"
          label={{
            value: 'الاشهر',
            position: 'insidebottom',
            offset: 0,
            position: 'center',
            fontSize: 20,
            fill: 'black',
          }}
        />
        <YAxis
          dataKey="patients"
          label={{
            value: 'عدد المرضى',
            angle: -90,
            position: 'insideLeft',
            position: 'left',
            offset: 0,
            fontSize: 20,
            fill: 'black',
          }}
          stroke="#2D9CDB"
        />
        <Tooltip />
        <Line type="monotone" dataKey="patients" stroke="#2D9CDB" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PatientLineChart;
