import axios from "axios";
import { useState } from "react";
import './inputStyle.css';
import cancel_icon from '../../images/trash-can.svg'; // Make sure to import the cancel icon

const PrescriptionForm = () => {
  const token = localStorage.getItem('token');
  const [formData, setFormData] = useState({
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
      const updatedPrescriptions = [...formData.prescriptions];
      updatedPrescriptions[index][field] = e.target.value;
      setFormData({ ...formData, prescriptions: updatedPrescriptions });
    } else {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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

      alert('تم اضافة الوصفة بنجاح');
      setFormData({
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
      })


    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
      } else if (error.request) {
        console.error('No response from server:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  const handleCancel = () => {
    setFormData({
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
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* all options */}
      <div className="bg-white p-4 rounded-xl">
        {/* patient info */}
        <div className='grid grid-cols-2 gap-4 align-center w-full'>
          {/* Your InfoComponent fields go here, unchanged */}
          <InfoComponent infoText="تاريخ المراجعة">
            <input
              type="date"
              name="reviewDate"
              value={formData.reviewDate}
              onChange={handleInputChange}
              required
            />
          </InfoComponent>
          <InfoComponent infoText="اسم المريض">
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              required
            />
          </InfoComponent>
          <InfoComponent infoText="التشخيص">
            <input
              type="text"
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleInputChange}
              required
            />
          </InfoComponent>
          <InfoComponent infoText="عمر المريض">
            <input
              type="number"
              name="patientAge"
              value={formData.patientAge}
              onChange={handleInputChange}
              required
            />
          </InfoComponent>
          <InfoComponent infoText="اسم الطبيب">
            <input
              type="text"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleInputChange}
              required
            />
          </InfoComponent>

          <InfoComponent infoText="جنس المريض">
            <select
              name="patientGender"
              value={formData.patientGender}
              onChange={handleInputChange}
              required
            // className="border w-full p-2 text-right"
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
            />
          </InfoComponent>

          <InfoComponent infoText="الإجراء الطبي">
            <input
              type="text"
              name="medicalProcedure"
              value={formData.medicalProcedure}
              onChange={handleInputChange}
              required
            />
          </InfoComponent>
        </div>

        {/* table */}
        <table className="w-full mt-4 mb-4 border-[2px] border-[#24cccc] rounded-lg">
          <thead className="border-[1px] border-[#24cccc]">
            <tr>
              <th className="p-2">التعليمات</th>
              <th className="p-2">المدة</th>
              <th className="p-2">التكرار</th>
              <th className="p-2">الشكل</th>
              <th className="p-2">الجرعة</th>
              <th className="p-2">اسم الدواء</th>
            </tr>
          </thead>
          <tbody className="border-[1px] border-[#24cccc] userInfo">
            {formData.prescriptions.map((prescription, index) => (
              <tr key={index} className="userInfo">
                <td className="p-2 userInfo">
                  <input
                    type="text"
                    value={prescription.instructions}
                    onChange={(e) => handleInputChange(e, index, 'instructions')}
                    required
                    className="w-full p-2" // Removed border class
                  />
                </td>
                <td className="p-2 userInfo">
                  <input
                    type="text"
                    value={prescription.duration}
                    onChange={(e) => handleInputChange(e, index, 'duration')}
                    required
                    className="w-full p-2" // Removed border class
                  />
                </td>
                <td className="p-2 userInfo">
                  <input
                    type="text"
                    value={prescription.frequency}
                    onChange={(e) => handleInputChange(e, index, 'frequency')}
                    required
                    className="w-full p-2" // Removed border class
                  />
                </td>
                <td className="p-2 userInfo">
                  <input
                    type="text"
                    value={prescription.form}
                    onChange={(e) => handleInputChange(e, index, 'form')}
                    required
                    className="w-full p-2" // Removed border class
                  />
                </td>
                <td className="p-2 userInfo">
                  <input
                    type="text"
                    value={prescription.dose}
                    onChange={(e) => handleInputChange(e, index, 'dose')}
                    required
                    className="w-full p-2" // Removed border class
                  />
                </td>
                <td className="p-2 userInfo">
                  <input
                    type="text"
                    value={prescription.medicineName}
                    onChange={(e) => handleInputChange(e, index, 'medicineName')}
                    required
                    className="w-full p-2" // Removed border class
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        <button type="button" onClick={addPrescription} className="bg-blue-500 text-white p-2 rounded-lg">
          إضافة وصفة
        </button>

        <div className="mb-4 mt-4 text-right">
          <label className="text-xl">ملاحظات طبية</label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            className="border-[#24cccc] border-[1px] w-full p-2 text-right rounded-xl"
          ></textarea>
        </div>
      </div>

      {/* Submit and Cancel Buttons */}
      <div className='bg-[#f4faf9] p-4 mt-4 rounded-lg text-xl flex flex-row-reverse gap-10 w-fit'>
        <button
          type="submit"
          className='bg-[#14B6DA] text-white py-2 px-4 rounded-lg'
        >
          حفظ وطباعة
        </button>
        <button
          type="button"
          className='flex items-center gap-4 shadow-xl px-4 border-[blue]'
          onClick={handleCancel}
        >
          <img src={cancel_icon} alt="Cancel" className='h-8' />
          <span>الغاء</span>
        </button>
      </div>
    </form>
  );
};

const InfoComponent = ({ infoText, children }) => {
  return (
    <div className="mb-4 flex flex-row-reverse px-4 py-2 gap-5 items-center userInfo">
      <label className="min-w-[100px] text-right text-xl">{infoText}</label>
      {children}
    </div>
  )
};


export default PrescriptionForm;