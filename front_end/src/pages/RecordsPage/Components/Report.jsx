import ReportSectionHeader from './ReportSectionHeader';
import ReportChart from './ReportSectionChart';
import BillingDataTable from './BillingDataTable';
import transactions from '../fake-transactions';

// Helper function to group transactions by date
const groupTransactionsByDate = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    // If the date is already present, push the transaction to that date group
    if (acc[transaction.date]) {
      acc[transaction.date].push(transaction);
    } else {
      // Otherwise, create a new array for that date
      acc[transaction.date] = [transaction];
    }
    return acc;
  }, {});
};

const Report = () => {
  // Group transactions by date
  const groupedTransactions = groupTransactionsByDate(transactions);

  return (
    <>
      <div className="bg-gray-100 w-[90%] mx-auto mt-16 rounded-xl h-fit">
        <ReportSectionHeader />
        <ReportChart />

        {/* billing */}
        <h2 className="text-2xl font-bold text-center mt-4">Billing Report</h2>
        {Object.keys(groupedTransactions).map((date) => {
          const transactionsForDate = groupedTransactions[date];

          // Calculate total sum and quantity sum for this date
          const totalSum = transactionsForDate.reduce(
            (sum, transaction) => sum + transaction.total,
            0
          );
          const quantitySum = transactionsForDate.reduce(
            (sum, transaction) => sum + transaction.quantity,
            0
          );

          return (
            <div key={date} className="bg-white ">
              <h3 className="text-xl font-bold mt-4 text-right p-2">
                <span className="border border-[#B7EBF7] px-4 rounded-lg">
                  {date}
                </span>
              </h3>
              <BillingDataTable
                transactions={transactionsForDate}
                totalSum={totalSum}
                quantitySum={quantitySum}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Report;
