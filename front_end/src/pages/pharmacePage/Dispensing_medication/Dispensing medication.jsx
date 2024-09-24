import React,{useState} from 'react'
import add from '../../../images/image 15.png'
import './Dispensingmedication.css'
import Save from '../../../images/save-instagram 1.png'
import Print from '../../../images/printer (1) 1.png'


function DispensingMedication() {
    const [rows, setRows] = useState([
        { instructions: '', duration: '', frequency: '', dosage: '', name: '' ,FormOfTheMedication:''}
      ]);
      const addRow = () => {
        setRows([...rows, { instructions: '', duration: '', frequency: '', dosage: '', name: '',FormOfTheMedication:'' }]);
      };    

      function handleInputChange(e, index, field) {
        const newRows = [...rows];
        newRows[index][field] = e.target.value;
        setRows(newRows);
      }
  

    return(
<div className="DispensingMedication">
    
 
<div className="info">
<h1 className='pationtInfoHead'>
    معلومات المريض
    </h1>
    <form className='form' action="">
    <div>
   
   <input type="text" id='input' />
   <label htmlFor="input">الأسم</label>
   </div>
   <div>
    <input type="text" id='input' />
    <label htmlFor="input">العمر </label>
    </div>
        <div>
    <input type="text" id='input' />
    <label htmlFor="input">الجنس </label>
    </div>

   
    </form>

</div>
<div className='head'>
<img src={add} alt="" onClick={addRow} />
<h1>
الوصفة الطبية
    </h1>
    <div> 
         {/* this impty div to center the text   */}
         </div>
    </div>

<div className='table   '>
    <table className=''>
    <tr >
    <th >التعليمات</th>
    <th >مدة العلاج</th>
    <th>التكرار</th>
    <th>شكل الدواء</th>
    <th>الجرعة</th>
    <th>اسم الدواء</th>
  
  </tr>
  {rows.map((row, index) => (
              <tr key={index}>
                <td><input type="text" value={row.instructions} onChange={(e) => handleInputChange(e, index, 'instructions')} /></td>
                <td><input type="text" value={row.duration} onChange={(e) => handleInputChange(e, index, 'duration')} /></td>
                <td><input type="text" value={row.frequency} onChange={(e) => handleInputChange(e, index, 'frequency')} /></td>
                <td><input type="text" value={row.FormOfTheMedication} onChange={(e) => handleInputChange(e, index, 'FormOfTheMedication')} /></td>
                <td><input type="text" value={row.dosage} onChange={(e) => handleInputChange(e, index, 'dosage')} /></td>
                <td><input type="text" value={row.name} onChange={(e) => handleInputChange(e, index, 'name')} /></td>

              </tr>
            ))}
    </table>
</div>
<div className='AdditionalNotes'>
    <h1>
    ملاحظات اضافية
    </h1>

    <div className='Inputnotes'>
        <input className='note' type="text" placeholder='...ادخل اي ملاحظات اضافية هنا' />
    </div>
</div>
<div className='bus'>
    <button>
<img src={Save} alt="" />
        <p>حفظ</p>
        </button>
        <button onClick={()=>window.print()}>
<img src={Print} alt="" />
        <p>طباعة</p>
        </button>
</div>
</div>

    )
}

export default DispensingMedication