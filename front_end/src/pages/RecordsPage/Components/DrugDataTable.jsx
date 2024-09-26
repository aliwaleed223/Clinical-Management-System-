const headsArr = [
  'متوفر',
  'شارف على النفاذ',
  'نفذ',
  'المنتج',
  'بتاريخ',
  'كود الدواء',
];

const DrugDataTable = ({ data }) => {
  return (
    <div className="bg-white mt-4 p-4">
      <table className="min-w-full">
        <TableHeader headers={headsArr} />
        <TableBody data={data} />
      </table>
    </div>
  );
};

const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((head) => (
          <HeaderItem headText={head} />
        ))}
      </tr>
    </thead>
  );
};

const HeaderItem = ({ headText }) => {
  return (
    <th className="border border-t-8 border-[#B7EBF7] p-2 font-extrabold text-xl">
      {headText}
    </th>
  );
};

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td className="border p-2 text-center">
            {row.status === 'متوفر' ? row.quantity : ''}
          </td>
          <td className="border p-2 text-center">
            {row.status === 'شارف على النفاذ' ? row.quantity : ''}
          </td>
          <td className="border p-2 text-center text-red-500 font-extrabold">
            {row.status === 'نفذ' ? 'X' : ''}
          </td>
          <td className="border p-2 text-center">{row.product}</td>
          <td className="border p-2 text-center">{row.date}</td>
          <td className="border p-2 text-center">{row.medicineCode}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default DrugDataTable;
