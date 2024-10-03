import DashBoardHeader from './DashBoardHeader';
import NavigationGrids from './NavigationGrids';
import Statistics from './Statistics';
import Welcome from './Welcome';

const Dashboard = () => {
  return (
    <div className="h-screen w-full pb-10">
      {/* header component */}
      <DashBoardHeader />
      {/* main content */}
      <div className="2xl:w-[70%] w-[80%] m-auto h-screen">
        {/* welcome part */}
        <Welcome />

        {/* navigation grids */}
        <NavigationGrids />

        {/* statistcs */}
        <Statistics />
      </div>
    </div>
  );
};


export default Dashboard;
