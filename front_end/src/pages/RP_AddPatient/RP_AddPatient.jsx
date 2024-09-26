import React,{useState,useContext} from "react";
import 'react-datepicker/dist/react-datepicker.css';
import './RP_AddPatient.css';
import Arrow from '../../images/arrow-right 1.png';
import bluewave from '../../Assets/Waveimgs/Mask group.png';
import bluewave2 from '../../Assets/Waveimgs/Mask group-1.png';
import axios from "axios";
import  {ClinicalContext}  from './../../pages/auth/contextFile';
function RP_AddPatient(){
  const {token} =useContext(ClinicalContext)
    const [formData, setFormData] = useState({
      name: '',
        gender: 'male',
        age:'',
        phone: '',
        registrationDate: '',
        idNumber: '',
        email: '',
        diseaseType:'ff',
        address: '',
        disease: '',
        notes: '',
      });
    console.log(formData)
      function handleChange (type,value){
      
        setFormData({
          ...formData,
          [type]:value
        })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };



      async function saveData() {
        
    
        try {
          
    
          const response = await axios.post(
            "http://localhost:4000/api/patient/patients",
         formData,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization:  `Bearer ${token}`,
              },
            }
          );
          alert("تم اضافة المريض بنجاح ");
          console.log("Data saved successfully:", response.data);
            // eslint-disable-next-line no-restricted-globals
            location.reload();
      


        } catch (error) {
          if (error.response) {
            console.error("Server Error:", error.response.data);
          
          } else if (error.request) {
            console.error("Network Error: No response received from the server.");
          
          } else {
            console.error("Error setting up request:", error.message);
           
          }
        }
      }




    return(
        <div className="RP-container"> 
            <div className="RP-header">
                <img src={Arrow} alt="" className="Arrow" onClick={() => window.history.back()}/>
                <h1>اضافة مريض</h1>
            </div>
            <form onSubmit={handleSubmit} className="patient-form">
              <img src={bluewave} alt="" className="wave1"/>
              <img src={bluewave2} alt="" className="wave2"/>
      <div className="form-row">
        <div className="form-group large-input">
          <label>الاسم الكامل</label>
          <input 
            type="text"
            name="fullName"
            value={formData.name}
            onChange={(e)=>{handleChange('name',e.target.value)}}
            required
          />
        </div>
        <div className="form-group small-input">
          <label>الجنس</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={(e)=>{handleChange('gender',e.target.value)}}
            required
          >
            <option value="">اختر الجنس</option>
            <option value="ذكر">ذكر</option>
            <option value="أنثى">أنثى</option>
          </select>
        </div>
        <div className="form-group small-input">
          <label>العمر</label>
          <input
            type="text"
            name="age"
            value={formData.age} 
            onChange={(e)=>{handleChange('age',e.target.value)}}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group large-input">
          <label>رقم الهاتف</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phone}
            onChange={(e)=>{handleChange('phone',e.target.value)}}
            required
          />
        </div>
        <div className="form-group small-input"> 
          <label>تاريخ التسجيل</label>
          <input
            type="date"
            name="signupDate"
            value={formData.registrationDate}
            onChange={(e)=>{handleChange('registrationDate',e.target.value)}}
            required
          />
        </div>
        <div className="form-group small-input">
          <label>رقم الهوية</label>

          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={(e)=>{handleChange('idNumber',e.target.value)}}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group large-input">
          <label>البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e)=>{handleChange('email',e.target.value)}}
            required
          />
        </div>
        <div className="checkbox-group">
          <label>
            <input
             type="checkbox"
             name="condition"
             checked={formData.diseaseType === 'مرض مزمن'} 
              onChange={(e)=>{handleChange('diseaseType','مرض مزمن')}}
            />
            مرض مزمن
          </label>
          <label>
            <input
            type="checkbox"
            name="condition"
            checked={formData.diseaseType === 'مرض عام'}
              
              onChange={(e)=>{handleChange('diseaseType','مرض عام')}}
            />
            مرض عام
          </label>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group large-input">
          <label>العنوان</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={(e)=>{handleChange('address',e.target.value)}}
            required
          />
        </div>
        <div className="form-group large-input">
          <label>الأمراض</label>
          <input
            type="text"
            name="ills"
            value={formData.disease}
            onChange={(e)=>{handleChange('disease',e.target.value)}}
            required
          />
        </div>
      </div>
      <div className="form-group" id="notes-input">
        <label>ملاحظات</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={(e)=>{handleChange('notes',e.target.value)}}
          className="notes-input"
        ></textarea>
      </div>
      <div className="form-group btn-add" >
        <button type="submit" className="submit-button" onClick={()=>{saveData()}}>إضافة</button>
      </div>
    </form>
        </div>
    )
}
export default RP_AddPatient;