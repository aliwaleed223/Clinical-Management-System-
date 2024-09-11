import { Link } from "react-router-dom";
import React, { useState } from 'react';
  import Homefig from '../../../images/dashboard.png';
  import Empolyees from '../../../images/employees.png';
  import patient from '../../../images/patient.png';
  import Doctor from '../../../images/doctor.png';
  import Records from '../../../images/Records.png';
  import reports from '../../../images/reports.png';
  import Pharmacits from '../../../images/Pharmacist.png';
  import drugStore from '../../../images/drugStore.png';
  import Invoice from '../../../images/invoice.png';
  import List from '../../../images/list.png';
  
  
  function list(params) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Showlis, SetshowList] = useState('hide');

    function changing(x) {
      if (x === 'show') {
        SetshowList('hide');
      } else {
        SetshowList('show');
      }}
  


    return(<>
      <div className="right-menu">
          <img src={List} alt="" onClick={() => changing(Showlis)} />
        </div>
        <div className={`list ${Showlis}`}>
          <ul>
            <div className="header">
              <h1>عيادة الامراض المزمنة</h1>
            </div>
            <Link to="/">
            <li>
              <p>
              لوح التحكم  </p>
              <img src={Homefig} alt="" />
            </li>
            </Link>
            <Link to="/">
            <li>
              <p>
              الموظفين </p>
              <img src={Empolyees} alt="" />
            </li>
            </Link>
            <Link to="/RPL">
            <li>
              <p>
              المرضى </p>
              <img src={patient} alt="" />
            </li>
            </Link>
            <Link to="/InvoicePage">
            <li>
            
              <p>
              الفواتير  </p>
              <img src={Invoice} alt="" />
             
            </li>
            </Link>

            <Link to="/doctor">
            <li>
              <p>الطبيب</p>
              <img src={Doctor} alt="" />
            </li>
            </Link>
            <li>
              <p>صيدلاني</p>
              <img src={Pharmacits} alt="" />
            </li>
            <li>
              <p>مخزن الادوية</p>
              <img src={drugStore} alt="" />
            </li>
            <li>
              <p>تقارير</p>
              <img src={reports} alt="" />
            </li>
            <li>
              <p>السجلات</p>
              <img src={Records} alt="" />
            </li>
          </ul>
        </div>
    
    
    </>)
  }
        

  export default list