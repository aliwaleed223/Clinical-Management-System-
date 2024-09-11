import React, { useState } from 'react';
import './InvoicePage.css';
import Arrow from '../../images/arrow-right 1.png';
import AddInvoiceimg from '../../images/addinvoice.png';
import trash from '../../images/trash.png';
import Select from 'react-select';

const patients = [
  { value: 'محمد', label: 'محمد' },
  { value: 'علي', label: 'علي' }, 
];

const invoicesData = [
  { id: 1, date: '2022-12-12', status: 'غير مسدد', name: ' محمد علي جاسم', invoiceNumber: 1 },
  { id: 2, date: '2022-02-23', status: 'مسدد', name: 'علي', invoiceNumber: 2 },
  { id: 3, date: '2022-05-15', status: 'غير مسدد', name: 'محمد علي ', invoiceNumber: 3 },
  { id: 4, date: '2022-08-18', status: 'غير مسدد', name: 'محمد علي ', invoiceNumber: 4 },
  { id: 5, date: '2022-10-01', status: 'غير مسدد', name: 'محمد علي ', invoiceNumber: 5 },
  { id: 6, date: '2022-12-12', status: 'غير مسدد', name: 'محمد علي ', invoiceNumber: 6 },
  { id: 7, date: '2022-02-23', status: 'مسدد', name: 'علي', invoiceNumber: 7 },
  { id: 8, date: '2022-05-15', status: 'غير مسدد', name: 'محمد علي ', invoiceNumber: 8 }
];

function InvoicePage() {
  const [invoices, setInvoices] = useState(invoicesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedPatientId, setSelectedPatientId] = useState(null); 

  const handleDelete = () => {
    if (selectedPatientId !== null) {
      setInvoices(invoices.filter(invoice => invoice.id !== selectedPatientId));
      setSelectedPatientId(null); // Clear the selection after deleting
    }
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearchTerm = invoice.name.includes(searchTerm) ||
                              invoice.status.includes(searchTerm) ||
                              invoice.invoiceNumber.toString().includes(searchTerm);

    const matchesDateRange = (!startDate || invoice.date >= startDate) &&
                             (!endDate || invoice.date <= endDate);

    return matchesSearchTerm && matchesDateRange;
  });

  return (
    <div className='InvoicePage-container'>
        <div className="InvoicePage-header">
            <img src={Arrow} alt="" className='Arrow' onClick={() => window.history.back()}/>
            <p>قائمة الفواتير</p>
        </div>
        <div className='InvoicePage-search'>
            <img src={trash} alt="" onClick={handleDelete} />
            <img src={AddInvoiceimg} alt="" />
            <input
              type="text"
              placeholder='بحث'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <Select options={patients} placeholder="اختر اسم المريض" isSearchable className='Patient-select' />
        </div>
        <div className="table-container">
          <div className="table-header">
                  <p>تاريخ الفاتورة</p>
                  <p>الحالة</p>
                  <p>الاسم</p>
                  <p>رقم الفاتورة</p>
          </div>
          <div className='table-body'>
                {filteredInvoices.map(invoice => (
                  <div className='row' key={invoice.id}>
                    <p>{invoice.date}</p>
                    <p>{invoice.status}</p>
                    <p>{invoice.name}</p>
                    <p>{invoice.invoiceNumber}</p>
                  </div>
                ))}
          </div>
        </div>
    </div>
  );
}

export default InvoicePage;
