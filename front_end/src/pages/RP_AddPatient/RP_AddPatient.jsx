import React,{useState} from "react";
import 'react-datepicker/dist/react-datepicker.css';
import './RP_AddPatient.css';
import Arrow from '../../images/arrow-right 1.png';
import bluewave from '../../Assets/Waveimgs/Mask group.png';
import bluewave2 from '../../Assets/Waveimgs/Mask group-1.png';

function RP_AddPatient(){
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        age: '',
        phoneNumber: '',
        signupDate: '',
        idNumber: '',
        email: '',
        isChronic: false,
        isSimple: false,
        address: '',
        ills: '',
        notes: '',
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
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
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group small-input">
          <label>الجنس</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">اختر الجنس</option>
            <option value="male">ذكر</option>
            <option value="female">أنثى</option>
          </select>
        </div>
        <div className="form-group small-input">
          <label>العمر</label>
          <input
            type="number"
            name="age"
            value={formData.age} 
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group large-input">
          <label>رقم الهاتف</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group small-input"> 
          <label>تاريخ التسجيل</label>
          <input
            type="date"
            name="signupDate"
            value={formData.signupDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group small-input">
          <label>رقم الهوية</label>
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="isChronic"
              checked={formData.isChronic}
              onChange={handleChange}
            />
            مرض مزمن
          </label>
          <label>
            <input
              type="checkbox"
              name="isSimple"
              checked={formData.isSimple}
              onChange={handleChange}
            />
            مرض عارض
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
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group large-input">
          <label>الأمراض</label>
          <input
            type="text"
            name="ills"
            value={formData.ills}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group" id="notes-input">
        <label>ملاحظات</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="notes-input"
        ></textarea>
      </div>
      <div className="form-group btn-add" >
        <button type="submit" className="submit-button">إضافة</button>
      </div>
    </form>
        </div>
    )
}
export default RP_AddPatient;