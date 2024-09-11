const headersArr = ['الاجمالي', 'مرتجع', 'غير مدفوع', 'مدفوع', 'المريض'];

const FollowUpTable = ({ data }) => {
  return (
    <div className="bg-white mt-4 p-4">
      <table className="min-w-full">
        <DetailedDataHeader headers={headersArr}/>
        <TableBody data={data}/>
      </table>
    </div>
  );
};

const DetailedDataHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((head) => (
          <TableHeader headText={head} />
        ))}
      </tr>
    </thead>
  );
};

const TableHeader = ({ headText }) => {
  return (
    <th className="border border-t-8 border-[#B7EBF7] p-2 font-extrabold text-xl">
      {headText}
    </th>
  );
};


const TableBody = ({ data }) => {
  // Calculate totals for each column
  const totalSum = data.reduce(
    (totals, row) => {
      totals.total += row.total;
      totals.paid += row.paid;
      totals.unpaid += row.unpaid;
      totals.back += row.back;
      return totals;
    },
    { total: 0, paid: 0, unpaid: 0, back: 0 }
  );

  return (
    <tbody>
      {/* Render each patient's row */}
      {data.map((row, index) => (
        <tr key={index}>
          <td className="border p-2 text-center">{row.total}</td>
          <td className="border p-2 text-center">{row.back}</td>
          <td className="border p-2 text-center">{row.unpaid}</td>
          <td className="border p-2 text-center">{row.paid}</td>
          <td className="border p-2 text-center">{row.patient}</td>
        </tr>
      ))}
      {/* Render the total row */}
      <tr className="font-bold">
        <td className="border p-2 text-center font-extrabold text-xl">{totalSum.total}</td>
        <td className="border p-2 text-center font-extrabold text-xl">{totalSum.back}</td>
        <td className="border p-2 text-center font-extrabold text-xl">{totalSum.unpaid}</td>
        <td className="border p-2 text-center font-extrabold text-xl">{totalSum.paid}</td>
        <td className="border p-2 text-center font-extrabold text-xl">الاجمالي</td>
      </tr>
    </tbody>
  );
};



export default FollowUpTable;
