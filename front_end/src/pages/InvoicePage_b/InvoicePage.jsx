import React, { useState,useContext } from "react";
import './InvoicePage.css';
import arrow from '../../images/arrow-right 2.png';
import { Link } from "react-router-dom";
import plus from '../../images/image 46.png';
import Lastsection from './lastsection';
import axios from 'axios';
import  {ClinicalContext}  from './../../pages/auth/contextFile';
function Invoice() {
  const {token} =useContext(ClinicalContext)

  const [handleResultFromLastSection, sethandleResultFromLastSection] = useState(null);
  const [values, setValues] = useState({ patientName: "", invoiceDate: "", issueDate: "", notes: "" });
  const [error, setError] = useState("");

  const handeleFromLast = (value) => {
    sethandleResultFromLastSection(value);
  };

  const handleValueChange = (field, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: newValue,
    }));
  };

  async function saveData() {
   

    try {
      const mergedData = {
        ...values, // patientName, invoiceDate, issueDate, notes
        items: handleResultFromLastSection?.items || [], // items from Lastsection
      };

      const response = await axios.post(
        "http://localhost:4000/api/invoice/invoice",
        mergedData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Data saved successfully:", response.data);
      alert("تم اضافة الفاتورة بنجاح ");
      // eslint-disable-next-line no-restricted-globals
      location.reload()
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
        setError("Server Error: " + error.response.data.message);
      } else if (error.request) {
        console.error("Network Error: No response received from the server.");
        setError("Network Error: No response from server.");
      } else {
        console.error("Error setting up request:", error.message);
        setError("Request Error: " + error.message);
      }
    }
  }

  return (
    <div className="invoice h-lvh">
      <div className="md:container md:mx-auto">
        <div className="header">
          <img src={arrow} alt="Back" onClick={() => window.history.back()} />
          <h1>عيادة الامراض المزمنة</h1>
          <div></div>
        </div>
        <div className="info md:mx-auto">
          {error && <p className="error-message">{error}</p>}
          <form>
            <div className="name">
              <Link to="/AddPatient">
                <div className="add_patient">
                  <p>اضافة مريض</p>
                  <img src={plus} alt="Add" />
                </div>
              </Link>
              <input
                type="text"
                id="name"
                value={values.patientName}
                onChange={(e) => handleValueChange('patientName', e.target.value)}
              />
              <label htmlFor="name">اسم المريض</label>
            </div>

            <div className="histore_notes flex flex-wrap">
              <input
                type="date"
                id="issueDate"
                value={values.issueDate}
                onChange={(e) => handleValueChange('issueDate', e.target.value)}
              />
              <label htmlFor="issueDate">تاريخ الفاتورة</label>

              <input
                type="date"
                id="invoiceDate"
                value={values.invoiceDate}
                onChange={(e) => handleValueChange('invoiceDate', e.target.value)}
              />
              <label htmlFor="invoiceDate">تاريخ الاصدار</label>

              <input
                type="text"
                id="notes"
                value={values.notes}
                onChange={(e) => handleValueChange('notes', e.target.value)}
              />
              <label htmlFor="notes">ملاحظات</label>
            </div>

            <Lastsection info={values} sendvalue={handeleFromLast} />
          </form>
        </div>
        <div className="buttons">
          <input type="button" value="حفظ وطباعة" onClick={saveData} />
          <input type="button" value="معاينة" />
        </div>
      </div>
    </div>
  );
}

export default Invoice;
