import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";
import './inputStyle.css'

const PrescriptionForm = () => {
  const token = localStorage.getItem('token');
  const [formData, setFormData] = useState({
    _id: "66f87d23d79570fb001d34a0",
    patientName: '',
    patientAge: '',
    patientGender: '',
    medicalProcedure: '',
    reviewDate: '',
    diagnosis: '',
    doctorName: '',
    procedureCost: '',
    prescriptions: [
      {
        medicineName: '',
        dose: '',
        form: '',
        frequency: '',
        duration: '',
        instructions: '',
      },
    ],
    additionalNotes: '',
  });

  const handleInputChange = (e, index, field = null) => {
    if (field) {
      // Update prescription fields
      const updatedPrescriptions = [...formData.prescriptions];
      updatedPrescriptions[index][field] = e.target.value;
      setFormData({ ...formData, prescriptions: updatedPrescriptions });
    } else {
      // Update other fields
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const addPrescription = () => {
    setFormData({
      ...formData,
      prescriptions: [
        ...formData.prescriptions,
        { medicineName: '', dose: '', form: '', frequency: '', duration: '', instructions: '' },
      ],
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Sending data:', formData);
  //   axios.post('http://localhost:4000/api/pers/prescriptions', formData, {
  //     Headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`
  //     }
  //   })
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if the token exists
      if (!token) {
        throw new Error("No authorization token provided.");
      }

      const response = await axios.post(
        'http://localhost:4000/api/pers/prescriptions',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );

      // Handle success response
      console.log('Prescription submitted successfully:', response.data);
      alert('Prescription submitted successfully!');

    } catch (error) {
      // Handle error response
      if (error.response) {
        // Server responded with an error (4xx or 5xx)
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response from server:', error.request);
      } else {
        // Error setting up the request
        console.error('Error setting up the request:', error.message);
      }
    }
  };


  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* patient info */}
      <div className='grid grid-cols-2 gap-4 align-center w-full'>

        <InfoComponent infoText="تاريخ المراجعة">
          <input
            type="date"
            name="reviewDate"
            value={formData.reviewDate}
            onChange={handleInputChange}
            required
          // className="border w-full p-2"
          />
        </InfoComponent>

        <InfoComponent infoText="اسم المريض">
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            required
          // className="border w-full p-2"
          />
        </InfoComponent>

        <InfoComponent infoText="التشخيص">
          <input
            type="text"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleInputChange}
            required
          // className="border w-full p-2"
          />
        </InfoComponent>

        <InfoComponent infoText="عمر المريض">
          <input
            type="number"
            name="patientAge"
            value={formData.patientAge}
            onChange={handleInputChange}
            required
          // className="border w-full p-2"
          />
        </InfoComponent>

        <InfoComponent infoText="اسم الطبيب">
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleInputChange}
            required
          // className="border w-full p-2"
          />
        </InfoComponent>

        <InfoComponent infoText="جنس المريض">
          <select
            name="patientGender"
            value={formData.patientGender}
            onChange={handleInputChange}
            required
            className="border w-full p-2 text-right"
          >
            <option value="">اختر</option>
            <option value="ذكر">ذكر</option>
            <option value="أنثى">أنثى</option>
          </select>
        </InfoComponent>

        <InfoComponent infoText="تكلفة الإجراء">
          <input
            type="number"
            name="procedureCost"
            value={formData.procedureCost}
            onChange={handleInputChange}
            required
          // className="border w-full p-2"
          />
        </InfoComponent>

        <InfoComponent infoText="الإجراء الطبي">
          <input
            type="text"
            name="medicalProcedure"
            value={formData.medicalProcedure}
            onChange={handleInputChange}
            required
          // className="border w-full p-2"
          />
        </InfoComponent>

      </div>

      {formData.prescriptions.map((prescription, index) => (
        <div key={index} className="mb-2 p-4 flex flex-row-reverse text-center text-xl">
          <h3>وصفة {index + 1}</h3>
          <div className="mb-2">
            <label>اسم الدواء</label>
            <input
              type="text"
              value={prescription.medicineName}
              onChange={(e) => handleInputChange(e, index, 'medicineName')}
              required
              className="border w-full p-2"
            />
          </div>
          <div className="mb-2">
            <label>الجرعة</label>
            <input
              type="text"
              value={prescription.dose}
              onChange={(e) => handleInputChange(e, index, 'dose')}
              required
              className="border w-full p-2"
            />
          </div>
          <div className="mb-2">
            <label>الشكل</label>
            <input
              type="text"
              value={prescription.form}
              onChange={(e) => handleInputChange(e, index, 'form')}
              required
              className="border w-full p-2"
            />
          </div>
          <div className="mb-2">
            <label>التكرار</label>
            <input
              type="text"
              value={prescription.frequency}
              onChange={(e) => handleInputChange(e, index, 'frequency')}
              required
              className="border w-full p-2"
            />
          </div>
          <div className="mb-2">
            <label>المدة</label>
            <input
              type="text"
              value={prescription.duration}
              onChange={(e) => handleInputChange(e, index, 'duration')}
              required
              className="border w-full p-2"
            />
          </div>
          <div className="mb-2">
            <label>التعليمات</label>
            <input
              type="text"
              value={prescription.instructions}
              onChange={(e) => handleInputChange(e, index, 'instructions')}
              required
              className="border w-full p-2"
            />
          </div>
        </div>
      ))}

      <button type="button" onClick={addPrescription} className="bg-blue-500 text-white p-2">
        إضافة وصفة
      </button>

      <div className="mb-4">
        <label>ملاحظات إضافية</label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleInputChange}
          className="border w-full p-2"
        ></textarea>
      </div>

      <button type="submit" className="bg-green-500 text-white p-2">
        إرسال
      </button>
    </form>
  );
};

const InfoComponent = ({ infoText, children }) => {
  return (
    <div className="mb-4 flex flex-row-reverse px-4 py-2 gap-5 items-center userInfo">
      <label className="min-w-[100px] text-right text-xl">{infoText}</label>
      {children}
    </div >
  )
};

export default PrescriptionForm;
