import './App.css';
import Login from './pages/Login/Login';
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
import PharmacrPage from './pages/pharmacePage/pharmacePage';
import Auth from './pages/auth/auth';
import Dashboard from './pages/Dashboard/Dashboard';
import Logs from './pages/LogsPage/Logs';
import BillingReport from './pages/RecordsPage/BillingReports';
import FollowUpBilling from './pages/RecordsPage/FollowUpBillingReport';
import DrugStore from './pages/RecordsPage/DrugStore';

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
            <Route path="/logs" element={<Logs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/billing-report" element={<BillingReport />} />
            <Route path="/follow-up" element={<FollowUpBilling />} />
            <Route path="/drugstore" element={<DrugStore />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
