import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { drugData } from './fake_data_charts';

const COLORS = [
  '#FF5733', // Red-Orange
  '#3357FF', // Blue
  '#FF33A6', // Pink
  '#FFC300', // Yellow
  '#581845', // Dark Purple
  '#900C3F', // Dark Red
  '#C70039', // Crimson
  '#FF5733', // Orange
  '#900C3F', // Burgundy
  '#FFBD33', // Golden Yellow
  '#339FFF', // Light Blue
  '#FF33F6', // Magenta
  '#FF3333', // Red
  '#33FF33', // Lime
  '#338FFF', // Sky Blue
  '#FF9933', // Orange
];

// This is variable to help sum the total of values in drug stor
// benfit: to used for rendring the percentage of values in pie chart
const total = drugData.reduce((acc, entry) => acc + entry.value, 0);

// custome lenged to rendere a percentage
const renderLegend = (props) => {
  // when passing func to Legend, Rechart provide props automatically for
  // this func
  const { payload } = props;
  return (
    <ul>
      {payload.map((entry, index) => {
        const percentage = ((entry.payload.value / total) * 100).toFixed(0);
        return (
          <li
            key={`item-${index}`}
            style={{ color: entry.color }}
            className="text-xl 2xl:text-2xl flex items-center mt-4 mr-10 mb-3"
          >
            <div
              className={`h-[20px] w-[20px] mr-2 ml-16`}
              style={{ backgroundColor: entry.color }}
            ></div>
            {percentage}% {entry.value}
          </li>
        );
      })}
    </ul>
  );
};

const MedicinePieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={drugData}
          dataKey="value"
          nameKey="name"
          cy="50%"
          cx="50%"
          outerRadius={100}
          label
        >
          {drugData.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            );
          })}
        </Pie>
        <Tooltip />
        <Legend
          content={renderLegend}
          layout="vertical"
          align="right"
          spacing={100}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MedicinePieChart;
