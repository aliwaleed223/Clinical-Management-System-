import Option from './Option.jsx';
import addPatient from '../../images/addpatient.png';
import patientList from '../../images/listPatient.png'
import addBill from '../../images/addinvoice.png'
import bills from '../../images/invoice.png'


const OptionList = () => {
  return (
    <div className=" grid grid-cols-2 p-4 place-items-center gap-4">
      <Option route={"/AddPatient"} imgLink={addPatient} optionText={'اضافة مريض'} />
      <Option route={"/RPL"} imgLink={patientList} optionText={"قائمة المرضى"} />
      <Option route={"/InvoicePageb"} imgLink={addBill} optionText={'اضافة فاتورة'} />
      <Option route={"/InvoicePage"} imgLink={bills} optionText={'الفواتير'} />
    </div>
  );
};

export default OptionList;
