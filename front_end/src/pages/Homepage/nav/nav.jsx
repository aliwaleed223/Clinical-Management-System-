/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from "react-router-dom";
import React from 'react';
import './nav.css';
// import Homefig from '../../../images/dashboard.png';
// import Empolyees from '../../../images/employees.png';
// import patient from '../../../images/patient.png';
// import Doctor from '../../../images/doctor.png';
// import Records from '../../../images/Records.png';
// import reports from '../../../images/reports.png';
// import Pharmacits from '../../../images/Pharmacist.png';
// import drugStore from '../../../images/drugStore.png';
// import Invoice from '../../../images/invoice.png';
// import list from '../../../images/list.png';
import Health from '../../../images/Health.png';
// import List from './list'
function nav(params) {

  
      return (
        <div className="nav container ">
          <div className="icon">
            <img src={Health} alt="wait pleas" />
          </div>
          <div className=" menu ">
            <ul>
              <li><Link to="/">
              مخزن الادويه </Link>  </li>
              <li><Link to="/dashboard">
              لوح التحكم</Link> </li>
              <li><Link to="/">
              التقارير</Link>  </li>
              <li><Link to="/logs">
              السجلات</Link> </li>
            </ul>
          </div>
        {/* <List /> */}
        {/* hide list after edit this page and add empty div */}
        <div></div>
        </div>
      );
    }
  

export default nav;
