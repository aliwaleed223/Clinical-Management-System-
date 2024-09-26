import Option from './Option.jsx';
import addPatient from '../../images/addpatient.png';
import patientList from '../../images/listPatient.png'
import addBill from '../../images/addinvoice.png'
import bills from '../../images/invoice.png'
import add_reservation from '../../images/add_reservation.svg'
import patients_reservation from '../../images/patients_reservations.svg'


const OptionList = () => {
  return (
    <div className=" grid grid-cols-3 p-4 place-items-center gap-4">
      <Option route={"/AddPatient"} imgLink={addPatient} optionText={'اضافة مريض'} />
      <Option route={"/RPL"} imgLink={patientList} optionText={"قائمة المرضى"} />
      <Option route={"/InvoicePageb"} imgLink={addBill} optionText={'اضافة فاتورة'} />
      <Option route={"/InvoicePage"} imgLink={bills} optionText={'الفواتير'} />
      <Option route={"/"} imgLink={add_reservation} optionText={'اضافة حجز'} />
      <Option route={"/"} imgLink={patients_reservation} optionText={'حجوزات المرضى'} />
    </div>
  );
};

export default OptionList;
