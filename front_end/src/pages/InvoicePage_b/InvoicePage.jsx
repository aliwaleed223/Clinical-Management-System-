import React, { useState } from "react";
import './InvoicePage.css'
import arrow from '../../images/arrow-right 2.png'
import { Link } from "react-router-dom";
import plus from '../../images/image 46.png'
import Lastsection from './lastsection'

function Invoice() {

    const [values, setValues] = useState({name:"" , IssueDate:""  ,InvoiceDate:"" ,Notes:""  });
    const handleValueChange = (field, newValue) => {
        setValues((prevValues) => ({
          ...prevValues,
          [field]: newValue,
        }));
      };
// console.log(values)
    return (
        <div className="invoice h-lvh ">
            <div className="md:container md:mx-auto  ">
                <div className="header">
                    <img src={arrow} alt="" onClick={() => window.history.back()} />

                    <h1 > عيادة الامراض المزمنة </h1>
                    <div></div>
                </div>
                <div className="info md:mx-auto">
                    <form action="">
                        <div  className="name" >
                      <Link to="/AddPatient" >
                       <div className="add_patient">
                        <p>اضافة مريض</p>
                        <img src={plus} alt="" />
                       </div >
                       </Link>
                            <input type="text" id="name" value={values.name}  onChange={(e) => handleValueChange('name', e.target.value)}  />
                            <label htmlFor="name">اسم المريض</label>

                        </div>

                        <div className="histore_notes flex flex-wrap">
                            <input type="date" id="name" value={values.IssueDate}  onChange={(e) => handleValueChange('IssueDate', e.target.value)} />
                            <label htmlFor="name">تاريخ الفاتورة</label>
                            <input type="date" id="name" value={values.InvoiceDate}  onChange={(e) => handleValueChange('InvoiceDate', e.target.value)}  />
                            <label htmlFor="name" >تاريخ الاصدار</label>
                            <input type="text" id="name" value={values.Notes}  onChange={(e) => handleValueChange('Notes', e.target.value)} />
                            <label htmlFor="name">ملاحضات</label>
                        </div>
                    <Lastsection  className="lastSection  " info={values} />
               
                    </form>
                </div>
                <div className="buttons">
                <input type="button" value={"حفظ وطباعة"} /> 
                <input type="button" value={"معاينة"} /> 
            </div>
            </div>
         
        </div>
    )

}
export default Invoice