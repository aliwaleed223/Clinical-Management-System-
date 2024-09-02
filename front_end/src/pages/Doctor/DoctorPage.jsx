import DoctorHeader from './DoctorHeader'
import PatientList from './PatientList';
import Footer from '../Homepage/footer/footer';

const DoctorPage = () => {
  
  return (
    <div className="bg-primary h-screen w-[100vw] overflow-y-scroll pb-5">
      <DoctorHeader />
      <PatientList />
      <Footer />
    </div>
  );
}
 
export default DoctorPage;