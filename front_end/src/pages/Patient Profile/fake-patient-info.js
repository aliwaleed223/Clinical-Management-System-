const fakeData = {
  personalInfo: {
    fullName: 'ماريا احمد محمد',
    gender: 'انثى',
    age: '22', // This seems to be derived from birthdate or age information
    phoneNumber: '+964 777088054',
    email: 'm@gmail.com',
    address: 'العراق بغداد',
    idNumber: '236748',
    registrationDate: '1/1/2024',
    disorder: 'توحد', // Added disease name here
    birthDate: '1/1/2002',
  },
  medicalRecords: [
    {
      prescriptionDate: '8/11/2024',
      doctorName: 'د.احمد محمد مصطفى',
      prescriptionNumber: '001',
      patientName: 'ماريا احمد محمد',
    },
    {
      prescriptionDate: '6/10/2024',
      doctorName: 'د.عبد الله عصام محمد',
      patientName: 'ماريا احمد محمد',
      prescriptionNumber: '002',
    },{
      prescriptionDate: '8/11/2024',
      doctorName: 'د.احمد محمد مصطفى',
      prescriptionNumber: '001',
      patientName: 'ماريا احمد محمد',
    },
    {
      prescriptionDate: '6/10/2024',
      doctorName: 'د.عبد الله عصام محمد',
      patientName: 'ماريا احمد محمد',
      prescriptionNumber: '002',
    },{
      prescriptionDate: '8/11/2024',
      doctorName: 'د.احمد محمد مصطفى',
      prescriptionNumber: '001',
      patientName: 'ماريا احمد محمد',
    },
    {
      prescriptionDate: '6/10/2024',
      doctorName: 'د.عبد الله عصام محمد',
      patientName: 'ماريا احمد محمد',
      prescriptionNumber: '002',
    },
    {
      prescriptionDate: '2/08/2024',
      doctorName: 'د.امنة احمد محمد',
      prescriptionNumber: '004',
      patientName: 'ماريا احمد محمد',
    },
    {
      prescriptionDate: '8/02/2024',
      doctorName: 'د.ابتهال محمد احمد',
      prescriptionNumber: '005',
      patientName: 'ماريا احمد محمد',
    },
  ],
  invoices: [
    {
      invoiceDate: '8/11/2024',
      status: 'مُسدد',
      invoiceNumber: '001',
      patientName: 'ماريا احمد محمد',
    },{
      invoiceDate: '8/11/2024',
      status: 'مُسدد',
      invoiceNumber: '001',
      patientName: 'ماريا احمد محمد',
    },{
      invoiceDate: '8/11/2024',
      status: 'مُسدد',
      invoiceNumber: '001',
      patientName: 'ماريا احمد محمد',
    },{
      invoiceDate: '8/11/2024',
      status: 'مُسدد',
      invoiceNumber: '001',
      patientName: 'ماريا احمد محمد',
    },
    {
      invoiceDate: '4/11/2024',
      status: 'مُسدد',
      invoiceNumber: '007',
      patientName: 'ماريا احمد محمد',
    },
    {
      invoiceDate: '9/09/2024',
      status: 'مُسدد',
      invoiceNumber: '003',
      patientName: 'ماريا احمد محمد',
    },
    {
      invoiceDate: '1/1/2024',
      status: 'غير مُسدد',
      invoiceNumber: '021',
      patientName: 'ماريا احمد محمد',
    },
  ],
  notes: [
    {
      note: 'مرض عارض - توحد', // Added disease name here as well
    },
  ],
};

export default fakeData;
