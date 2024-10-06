import React, { useRef, useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import arrow from './../../../images/arrow_down.png'
import  './MedicationDispensingList.css'
const { RangePicker } = DatePicker;


function MedicationDispensingList() {

    const [hidelist,setHideList]=useState('hide')
    return (
        <div className="MedicationDispensingList">
            <div className="DateAndPatientName">
                <RangePicker className='date' />
                <div className="listOfpatient">
                <input type="text" id='input' placeholder='اختر اسم المريض' />
  
   <img src={arrow} alt="" onClick={() => setHideList(hidelist === '' ? 'hide' : '')}/>
   <div className={`listOfpationt ${hidelist}`}>
    <ul>
        <li>باقر محسن خلف</li>
        <li>باقر محسن خلف</li>
        <li>باقر محسن خلف</li>
        <li>باقر محسن خلف</li>
        <li>باقر محسن خلف</li>
    </ul>
   </div>
                </div>
              
            </div>
            <table>
                    <thead>
                        <tr>
                            <td>رقم الوصفة</td>
                            <td>اسم المريض</td>
                            <td>التاريخ</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>رقم الوصفة</td>
                            <td>اسم المريض</td>
                            <td>التاريخ</td>
                        </tr>
                        <tr>
                            <td>رقم الوصفة</td>
                            <td>اسم المريض</td>
                            <td>التاريخ</td>
                        </tr>  <tr>
                            <td>رقم الوصفة</td>
                            <td>اسم المريض</td>
                            <td>التاريخ</td>
                        </tr>  <tr>
                            <td>رقم الوصفة</td>
                            <td>اسم المريض</td>
                            <td>التاريخ</td>
                        </tr>  <tr>
                            <td>رقم الوصفة</td>
                            <td>اسم المريض</td>
                            <td>التاريخ</td>
                        </tr>  <tr>
                            <td>رقم الوصفة</td>
                            <td>اسم المريض</td>
                            <td>التاريخ</td>
                        </tr>  <tr>
                            <td>رقم الوصفة</td>
                            <td>اسم المريض</td>
                            <td>التاريخ</td>
                        </tr>  <tr>
                            <td>رقم الوصفة</td>
                            <td>اسم المريض</td>
                            <td>التاريخ</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
}

export default MedicationDispensingList;