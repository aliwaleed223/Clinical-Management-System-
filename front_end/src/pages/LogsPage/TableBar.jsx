const TableBar = () => {
  return (
    <div className="bg-[#E5F8FC] border border-[#14B6DA] rounded-xl 2xl:py-5 py-5 w-[95%] grid grid-cols-6 place-items-end gap-10 pr-10">
      <TableBarHeader headerText="التاريخ والوقت" />
      <TableBarHeader headerText="نتيجة النشاط" />
      <TableBarHeader headerText="المستخدم المعني" />
      <TableBarHeader headerText="نوع النشاط" />
      <TableBarHeader headerText="اسم المستخدم" />
      <TableBarHeader headerText="دور المستخدم" />
    </div>
  );
};

const TableBarHeader = ({ headerText }) => {
  return <p className="text-3xl 2xl:text-4xl">{headerText}</p>;
};

export default TableBar;
