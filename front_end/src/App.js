import './App.css';
import Login from './pages/Login/Login'
// import Adduser from './pages/AddUser/AddUser'
import Homepage from '../src/pages/Homepage/home';
import RPL from './pages/Receptionist-Patient-List/RpatientList';
import RP_AddPatient from './pages/RP_AddPatient/RP_AddPatient';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoicePage from './pages/InvoicePage/InvoicePage';
import InvoicePageb from './pages/InvoicePage_b/InvoicePage';
import Reception from './pages/Reception/Reception';
import DoctorPage from './pages/Doctor/DoctorPage';
import PatientProfile from './pages/Patient Profile/PatientProfile';
import Cardpage from './pages/Cardpage/Cardpage';
// import Logs from './pages/LogsPage/Logs.jsx';
import PharmacrPage from './pages/pharmacePage/pharmacePage'
// import Login from './pages/Login/Login'
// import Adduser from './pages/AddUser/AddUser'
import Auth from './pages/auth/auth';

function App() {
  return (
    <div className="App mx-auto font-amiri">
      <Router>
        <Routes>
        {/* <Route path="/adduser" element={<Adduser />} /> */}
        
        <Route path="/Login" element={<Login />} /> 
        
        <Route element={<Auth />}>
        <Route path="/PharmacrPage" element={<PharmacrPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/Reception" element={<Reception />} />
          <Route path="/InvoicePageb" element={<InvoicePageb />} />
          <Route path="/RPL" element={<RPL />} />
          <Route path="/AddPatient" element={<RP_AddPatient />} />
          <Route path="/InvoicePage" element={<InvoicePage />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/patient-profile" element={<PatientProfile />} />
          <Route path="/cardpage" element={<Cardpage />} />
          {/* <Route path="/logs" element={<Logs />} /> */}
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
