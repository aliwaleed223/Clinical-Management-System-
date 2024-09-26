const headersArr = [
  'الاجمالي',
  'الخصم',
  'الكمية',
  'سعر الغرفة',
  'المريض',
  'فاتورة',
  'موظف',
  'كود المنتج',
  'الاسم',
  'المعرف',
];



const BillingDataTable = ({ transactions, totalSum, quantitySum }) => {
  return (
    <div className="bg-white mt-4 p-4">
      <table className="min-w-full">
        <DetailedDataHeader headers={headersArr} />
        <TableBody transactions={transactions} headers={headersArr} />
        <tfoot>
          <tr>
            <td className="text-center border border-[#B7EBF7] font-bold">
              المجموع:
            </td>
            <td className="text-center border border-[#B7EBF7] font-bold">
              {totalSum}
            </td>
            <td className="text-center border border-[#B7EBF7] font-bold">
              {quantitySum}
            </td>
            <td
              colSpan={headersArr.length - 3}
              className="border border-[#B7EBF7]"
            ></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const DetailedDataHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((head) => (
          <TableHeader key={head} headText={head} />
        ))}
      </tr>
    </thead>
  );
};

const TableHeader = ({ headText }) => {
  return <th className="border border-[#B7EBF7] p-2 font-extrabold text-xl">{headText}</th>;
};

const TableBody = ({ transactions, headers }) => {
  return (
    <tbody>
      {transactions.map((transaction, index) => (
        <TableRow key={index} rowData={transaction} headers={headers} />
      ))}
    </tbody>
  );
};

const TableRow = ({ rowData, headers }) => {
  return (
    <tr>
      {headers.map((header) => {
        const cellData = rowData[headerMapping(header)] || ''; // Use a default value if the key is missing
        return <TableData key={header} singleData={cellData} />;
      })}
    </tr>
  );
};

const headerMapping = (header) => {
  const mapping = {
    الاجمالي: 'total',
    الخصم: 'discount',
    الكمية: 'quantity',
    'سعر الغرفة': 'price_per_room',
    المريض: 'patient_name',
    فاتورة: 'invoice_number',
    موظف: 'employee_name',
    'كود المنتج': 'product_code',
    الاسم: 'service',
    المعرف: 'id',
  };
  return mapping[header];
};

const TableData = ({ singleData }) => {
  return (
    <td className="text-center border border-[#B7EBF7] p-2">{singleData}</td>
  );
};

export default BillingDataTable;