import React,{useState} from 'react'
import { DatePicker } from 'antd';
import arrow from './../../../images/arrow_down.png'
import './RequestResponseList.css'
import notification  from './../../../images/Notification.png';
const { RangePicker } = DatePicker;
function RequestResponseList(params) {
    const [hidelist,setHideList]=useState('hide')


    return(
        <div className="RequestResponseList">
         <div className="EnterInformation">
            <div className='dateAndNotification'>
                
         <RangePicker className='date' /> 
         <img src={notification} alt="" />
                <div className='notification'>1</div>
         </div>{/* Corrected the typo here */}
                <div className="list">
                <input type="text" id='input' placeholder='اختر اسم المريض' />
  
   <img src={arrow} alt="" onClick={() => setHideList(hidelist === '' ? 'hide' : '')}/>
   <div className={`list ${hidelist}`}>
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
                    <td>اسم امين المخزن</td>
                    <td>حالة المخزون</td>
                    <td>الكمية المتوفرة</td>
                    <td>تاريخ انتهاء الصلاحية </td>
                    <td>تاريخ الرد</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>عصام معتز بشير</td>
                    <td>متوفر بالكامل</td>
                    <td>95</td>
                    <td> 10/1/2025</td>
                    <td>9/30/2024</td>
                </tr>
                <tr>
                    <td>عصام معتز بشير</td>
                    <td>متوفر بالكامل</td>
                    <td>95</td>
                    <td> 10/1/2025</td>
                    <td>9/30/2024</td>
                </tr>
                <tr>
                    <td>عصام معتز بشير</td>
                    <td>متوفر بالكامل</td>
                    <td>95</td>
                    <td> 10/1/2025</td>
                    <td>9/30/2024</td>
                </tr>
                <tr>
                    <td>عصام معتز بشير</td>
                    <td>متوفر بالكامل</td>
                    <td>95</td>
                    <td> 10/1/2025</td>
                    <td>9/30/2024</td>
                </tr>
            </tbody>
         </table>
        </div>
    )
}
export default RequestResponseList