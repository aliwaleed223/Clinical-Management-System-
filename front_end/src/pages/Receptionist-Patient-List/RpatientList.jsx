import React, { useState,useEffect,useContext } from 'react';
import './RpatientList.css';
import AddPatient from '../../images/addpatient.png';
import trash from '../../images/trash.png';
import options from '../../images/options.png';
import RPLoptions from '../../components/RPL-Options/RPLoptions';
import arrow from '../../images/arrow-right 1.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  {ClinicalContext}  from './../../pages/auth/contextFile';

function RpatientList() {
  const {token} =useContext(ClinicalContext)
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    critical: false,
    treated: false,
    subscribed: false,
    nonSubscribed: false,
    surgeries: false,
    followUp: false
  });
  const [allPatients, setAllPatients] = useState([]);
  async function getAllpatient  (){
   try{ const r=  await axios({
        method:"get",
        // data:"data",
        url:"http://localhost:4000/api/patient/patients",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },


      });
    setAllPatients(r.data)
      console.log(allPatients)
   }
   catch (error) {
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }

  }
  }
  useEffect(() => {
    getAllpatient();
  }, []);

  
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.checked
    });
  };

  const filteredPatients = allPatients.filter(patient => {
    const matchesSearch = Object.values(patient).some(value =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    );

    const hasActiveFilter = Object.values(filters).some(Boolean);

    const matchesFilter = (
      (!hasActiveFilter) ||
      (filters.subscribed && patient.status === 'مشترك') ||
      (filters.nonSubscribed && patient.status === 'بدون اشتراك')
    );

    return matchesSearch && matchesFilter;
  });
  
  const [showOptions, setShowOptions] = useState(false);
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  }



  return (
    <div className="RPL-container">
      <div className="RPL-title">
        <img src={arrow} alt="" className='Arrow' onClick={() => window.history.back()} style={{cursor: 'pointer'}}/>
      <h1 className='RPL-title'>قائمة المرضى</h1>
      </div>
      <div className='RPL-Edit'>
        <div>
          <img src={trash} alt="Trash" />
          <Link to='/AddPatient' ><img src={AddPatient} alt="Add Patient" /></Link>
        </div>
        <div>
          <input 
           type="text"
           placeholder='بحث'
           className='search-btn'
           value={search}
           onChange={handleSearchChange} />
          <img src={options} alt="Options" onClick={toggleOptions} style={{cursor: 'pointer'}} />
          {showOptions && (<RPLoptions filters={filters} onFilterChange={handleFilterChange} />)}
          
        </div>
      </div>
      <div className="table-container">
        <div className="table-header">
                <p>الحالة</p>
                <p>رقم الهاتف</p>
                <p>التشخيص</p>
                <p>العمر</p>
                <p>الاسم</p>
        </div>
            <div className='table-body'>
              {filteredPatients.map((patient, index) => (
                <div className='row' key={index}>
                  <p>مشترك</p>
                  <p>{patient.phone}</p>
                  <p>{patient.diseaseType}</p>
                  <p>{patient.age}</p>
                  <p>{patient.name}</p>
                </div>
              ))}
            </div>
        
      </div>
    </div>
  );
}

export default RpatientList;
