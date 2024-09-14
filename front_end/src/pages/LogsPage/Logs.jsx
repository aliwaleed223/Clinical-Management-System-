import FilterAndSelect from './FilterAndSelect';
import LogBar from './LogBar';
import LogsHeader from './LogsHeader';
import TableBar from './TableBar';
// fake data
import logsData from './fake_logs';

const groupLogsByDate = (logs) => {
  return logs.reduce((acc, log) => {
    const { date } = log;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(log);
    return acc;
  }, {});
};

const Logs = () => {
  const groupedLogs = groupLogsByDate(logsData);

  return (
    <div className="bg-red- w-[95%] m-auto h-screen">
      {/* page header */}
      <LogsHeader />

      {/* select and filter data */}
      <FilterAndSelect />

      {/* table bar */}
      <TableBar />

      {/* Logs container */}
      {Object.entries(groupedLogs).map(([date, logs]) => (
        <div key={date} className="relative mb-2 overflow-hidden">
          {/* Vertical Line as Timeline */}
          <div className="absolute right-[20px] top-10 bottom-10 2xl:right-[35px] w-[2px] bg-[#14B6DA] -z-10"></div>

          <div className="flex justify-end z-10">
            <h3 className="text-xl 2xl:text-2xl font-bold my-4 bg-white p-2 rounded-xl border border-[#14B6DA]">
              {date}
            </h3>
          </div>

          {/* LogBar Items */}
          {logs.map((logObj, index) => (
            <LogBar log={logObj} key={index} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Logs;
