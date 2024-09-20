import DashBoardHeader from './DashBoardHeader';
import NavigationGrids from './NavigationGrids';
import Statistics from './Statistics';
import Welcome from './Welcome';
import axios from 'axios';

const Dashboard = () => {
  return (
    <div className="h-screen w-full pb-10">
      {/* header component */}
      <DashBoardHeader />
      {/* main content */}
      <div className="2xl:w-[70%] w-[80%] m-auto h-screen">
        {/* welcome part */}
        <Welcome name="أحمد" />

        {/* navigation grids */}
        <NavigationGrids />

        {/* statistcs */}
        <Statistics />
      </div>
    </div>
  );
};

// const bringData = async () => {
//   const token =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWhtZWQgamF3YWQiLCJpZCI6IjY2ZTM1OWYxMzg4NTBkMzBhZGYzNzc5YSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI2NzM0OTc3LCJleHAiOjE3MjY3NjM3Nzd9.aXsTElZXHiLRoA23lJ9GRRhK-cWHkE4-a7m79ktx5W8';
//   const respone = await axios.get(
//     'http://localhost:4000/api/patient/patients',
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   console.log(respone.data);
// };

// bringData();

export default Dashboard;
