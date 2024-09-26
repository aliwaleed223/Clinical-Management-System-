import React, { useEffect, useState,useContext } from 'react';
import './InvoicePage.css';
import Arrow from '../../images/arrow-right 1.png';
import AddInvoiceimg from '../../images/addinvoice.png';
import trash from '../../images/trash.png';
import axios from 'axios';
import  {ClinicalContext}  from './../../pages/auth/contextFile';
function InvoicePage() {
  const {token} =useContext(ClinicalContext)
  const [invoices, setInvoices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [slect, setSlect] = useState('');


  ////////////////////////////////////{git all invoices}//////////////////////////////////////////////////
  useEffect(() => {
    async function getAllinvoice() {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:4000/api/invoice/allInvoices",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInvoices(response.data);
        console.log('Fetched Invoices:', response.data.patientName);
      } catch (error) {
        if (error.response) {
          console.error("Error response data:", error.response.data);
        } else if (error.request) {
          console.error("Error request:", error.request);
        } else {
          console.error("Error message:", error.message);
        }
      }
    }
    getAllinvoice();
  }, [token]); // Dependency array ensures it runs only once on page load
  ////////////////////////////////////{git all invoices}//////////////////////////////////////////////////

  ////////////////////////////////////{delete invoice}//////////////////////////////////////////////////

async function deleteInvoice(id) {
  try {
    await axios({
      method: "delete",
      url: `http://localhost:4000/api/invoice/invoice/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    alert("تم حذف الفاتورة بنجاح ");
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  } catch (error) {
    if (error.response) {
      console.error("Error response data:", error.response.data);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
  }
}
 ////////////////////////////////////{delete invoice}//////////////////////////////////////////////////

  // Filter the invoices based on search term, start date, and end date
  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearchTerm = (invoice.patientName && invoice.patientName.includes(searchTerm)) ||
                              (invoice._id && invoice._id.includes(searchTerm)); // You can search by patientName or _id
  
    const matchesDateRange = (!startDate || new Date(invoice.invoiceDate) >= new Date(startDate)) &&
                             (!endDate || new Date(invoice.invoiceDate) <= new Date(endDate));
  
    return matchesSearchTerm && matchesDateRange;
  });





  return (
    <div className='InvoicePage-container'>
      <div className="InvoicePage-header">
        <img src={Arrow} alt="Back Arrow" className='Arrow' onClick={() => window.history.back()} />
        <p>قائمة الفواتير</p>
      </div>
      <div className='InvoicePage-search'>
        <img src={trash} alt="Delete Invoice"  style={{cursor:"pointer"}}  onClick={()=>{deleteInvoice(slect)}}/>
        <img src={AddInvoiceimg} alt="Add Invoice" />
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
      </div>
      <div className="table-container">
        <div className="table-header">
          <p>تاريخ الفاتورة</p>
          <p>الحالة</p>
          <p>الاسم</p>
          <p>رقم الفاتورة</p>
        </div>
        <div className='table-body'>
          {filteredInvoices.length > 0 ? (
            filteredInvoices.map((invoice, index) => (
              <div className={`row ${slect===invoice._id ? "SelectClass" : ""}`} key={invoice.id}  onClick={()=>setSlect(invoice._id)}>
                <p>{invoice.createdAt}</p>
                <p>مشترك</p>
                <p>{invoice.patientName}</p>
                <p>{index + 1}</p>
              </div>
            ))
          ) : (
            <p>No invoices found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvoicePage;
