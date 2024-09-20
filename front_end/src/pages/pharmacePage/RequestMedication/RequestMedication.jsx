import React, { useState } from 'react'
import add from '../../../images/image 15.png'
import send_icon from '../../../images/printer (1) 1.png'
//  import css file from other file 
import '../Dispensing_medication/Dispensingmedication.css'
import './RequestMedication.css'


import Save from '../../../images/save-instagram 1.png'
import Print from '../../../images/printer (1) 1.png'
import pharmacePage from '../pharmacePage'


function DispensingMedication() {


  const [medicines, setMedicines] = useState([
    { quantity: '', name: '' }
  ]);
  const addMedicine = () => {
    setMedicines([...medicines, { quantity: '', name: '' }]);
  };
  const handleInputChange = (e, index, field) => {
    const newMedicines = [...medicines];
    newMedicines[index][field] = e.target.value;
    setMedicines(newMedicines);
  };




  const [finalInfo, setfinalInfo] = useState({ medicines, pharmaceName: '', history: '' })
  const handleInputChangeForfinalInfo = (e, field) => {
    setfinalInfo({
      ...finalInfo,
      [field]: e.target.value
    });
  };



  console.log(finalInfo)


  return (
    <div className="DispensingMedication">


      <div className="info">
        <h1 className='pationtInfoHead'>
          طلب الدواء من المخزن
        </h1>
        <form className='form form2' action="">
          <div>

            <input type="text" id='input' value={finalInfo.pharmaceName}
              onChange={(e) => handleInputChangeForfinalInfo(e, 'pharmaceName')} />
            <label htmlFor="input" >اسم الصيدلاني</label>
          </div>
          <div>
            <input type="text" id='input' value={finalInfo.history}
              onChange={(e) => handleInputChangeForfinalInfo(e, 'history')} />
            <label htmlFor="input">تاريخ الطلب  </label>
          </div>



        </form>

      </div>
      <div className='head'>

      </div>
      {medicines.map((medicine, index) => (
        <div className='Name_of_the_medicine' key={index}>
          <input
            type="number"
            style={{ width: '100px' }}
            value={medicine.quantity}
            onChange={(e) => handleInputChange(e, index, 'quantity')}
          />
          <label style={{ marginLeft: '0px' }} htmlFor="">
            الكمية
          </label>
          <img
            src={add}
            alt="Add Medicine"
            onClick={addMedicine}

          />
          <input
            type="text"
            value={medicine.name}
            onChange={(e) => handleInputChange(e, index, 'name')}
          />
          <label htmlFor="">
            اسم الدواء
          </label>
        </div>
      ))}

      <div className='AdditionalNotes'>
        <h1>
          ملاحظات اضافية
        </h1>

        <div className='Inputnotes'>
          <input className='note' type="text" placeholder='...ادخل اي ملاحظات اضافية هنا' />
        </div>
      </div>
      <div className='send_request'>
        <button>
          <img src={send_icon} alt="" />
          <p> ارسال الطلب </p>
        </button>

      </div>
    </div>

  )
}

export default DispensingMedication