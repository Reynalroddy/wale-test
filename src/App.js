import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Attestation from "./pages/Attestation";
// import Death from "./pages/Death";
import './App.scss';
import Unauthorized from "./pages/Unauthorized";
import Login from "./pages/Login";
// import SingleApplication from "./pages/SingleApplication";
import Admin from "./pages/Admin";
import ProtectedRouteAdmin from "./pages/ProtectedRouteAdmin";
import Homez from "./components/Homez";
// import AdminFlagged from "./pages/AdminFlagged";
import AdminVerified from "./pages/AdminVerified";
// import AdminVerified2 from "./pages/AdminVerified2";
// import AdminVerified3 from "./pages/AdminVerified3";
import Main from "./pages/Main";
import BirthReg from "./pages/BirthReg";
import BirthReport from "./pages/BirthReport";
// import CertPending from "./pages/CertPending";
import BirthRegState from "./pages/BirthRegState";
import BirthRegLga from "./pages/BirthRegLga";
// import PendingHospital from "./pages/PendingHospital"
// import SingleHospital from "./pages/SingleHospital";
// import PublicHos from "./pages/PublicHos";
// import PrivateHos from "./pages/Private";
// import Registrars from "./pages/Registrars";
// import RegList from "./pages/RegistrarsList";
// import SingleRegistrars from "./pages/Single-registrars";
// import NewReg from "./pages/NewReg";
// import PendingCert from "./pages/PendingCert";
// import Still from "./pages/Still";
import BirthCenter from "./pages/BirthCenter";
// import DeathReg from "./pages/DeathReg";
// import DeathRegState from "./pages/DeathRegState";
// import DeathRegLga from "./pages/DeathRegLga";
// import DeathCenter from "./pages/DeathCenter";
// import SingleApplication2 from "./pages/SingleApplication2";
// import AttestReg from "./pages/AttestReg";
// import AttestRegLga from "./pages/AttestRegLga";
// import AttestCenter from "./pages/AttestCenter";
// import AttestRegState from "./pages/AttestRegState";
// import StillReg from "./pages/StillReg";
// import StillRegState from "./pages/StillRegState";
// import StillRegLga from "./pages/StillRegLga";
// import StillCenter from "./pages/StillCenter";
// import AdminVerified4 from "./pages/AdminVerified4";
// import SingleApplication3 from "./pages/SingleApplication3";
// import SingleApplication4 from "./pages/SingleApplication4";
// import Dcr from "./pages/Dcr";
// import DcrList from "./pages/DcrList";
// import NewReg2 from "./pages/NewReg2";
// import RegistrarsCp from "./pages/RegistrarsCp";
// import NewRegg from "./pages/NewRegg";
// import ModBirth from "./pages/ModBirth";
// import ModDeath from "./pages/ModDeath";
// import ModAttest from "./pages/ModAttest";
// import UpdateUser from "./pages/UpdateUser";
// import Admins from "./pages/Admins";
// import NewAdmin from "./pages/NewAdmin";
// import SingleDcr from "./pages/Single-dcr";
const App = () => {
  return (
    <Router>
      <Routes>
      {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home2 />
             </ProtectedRoute>
          }
        >
          <Route index element={<Pending/>} />
          <Route path='verified' element={<Verified/>} />
          <Route path='flagged' element={<Flagged/>} />
          <Route path='single' element={<SingleApplication/>} />
        </Route> */}

        <Route
          path="/"
          element={
            <ProtectedRouteAdmin>
              <Homez />
             </ProtectedRouteAdmin>
          }
        >
          <Route index element={<Main/>} />
           {/* <Route path='admin-flagged' element={<AdminFlagged/>}/>
           <Route path='death' element={<Death/>}/> */}
           <Route path='birth' element={<Admin/>}/>
           <Route path='birth/registrations' element={<BirthReg/>}/>
           <Route path='birth/state/:id' element={<BirthRegState/>}/>
           <Route path='birth/lga/:id' element={<BirthRegLga/>}/>
           <Route path='birth/center/:id' element={<BirthCenter/>}/>
          
           {/* <Route path='attestation/registrations' element={<AttestReg/>}/>
           <Route path='attestation/state/:id' element={<AttestRegState/>}/>
           <Route path='attestation/lga/:id' element={<AttestRegLga/>}/>
           <Route path='attestation/center/:id' element={<AttestCenter/>}/>
          */}
                         
           <Route path='birth-report' element={<BirthReport/>}/>
           {/* </Route> */}
                          
           {/* <Route path='death' element={<Death/>}/>
           <Route path='death/registrations' element={<DeathReg/>}/>
           <Route path='modify/birth/registrations' element={<ModBirth/>}/>
           <Route path='modify/death/registrations' element={<ModDeath/>}/>
           <Route path='modify/attest/registrations' element={<ModAttest/>}/>
           <Route path='death/state/:id' element={<DeathRegState/>}/>
           <Route path='death/lga/:id' element={<DeathRegLga/>}/>
           <Route path='death/center/:id' element={<DeathCenter/>}/>
           <Route path='attestation' element={<Attestation/>}/>
           <Route path='still' element={<Still/>}/> */}

           {/* <Route path='still/registrations' element={<StillReg/>}/>
           <Route path='still/state/:id' element={<StillRegState/>}/>
           <Route path='still/lga/:id' element={<StillRegLga/>}/>
           <Route path='still/center/:id' element={<StillCenter/>}/>
           <Route path='cert-pending' element={<CertPending/>}/> */}
           <Route path='birth/list' element={<AdminVerified/>} />  
           {/* <Route path='death/list' element={<AdminVerified2/>} />    
           <Route path='attestation/list' element={<AdminVerified3/>} />  
           <Route path='still/list' element={<AdminVerified4/>} />    
           <Route path='hospital/pending' element={<PendingHospital/>} />    
           <Route path='hospital/public' element={<PublicHos/>} />    
           <Route path='hospital/private' element={<PrivateHos/>} />    
           <Route path='single/:id' element={<SingleApplication/>} />
           <Route path='single-death/:id' element={<SingleApplication2/>} />
           <Route path='single-attest/:id' element={<SingleApplication4/>} />
           <Route path='single-still/:id' element={<SingleApplication3/>} />
           <Route path='single-hospital/:id' element={<SingleHospital/>} />
           <Route path='single-registrars/:id' element={<SingleRegistrars/>} />
           <Route path='single-dcr' element={<SingleDcr/>} />
           <Route path='registrars' element={<Registrars/>} />
           <Route path='directors' element={<RegistrarsCp/>} />
           <Route path='dcr' element={<Dcr/>} /> */}
           {/* <Route path='admins' element={<Admins/>} />
           <Route path='dcr-list' element={<DcrList/>} />
           <Route path='registrars-list' element={<RegList/>} />
           <Route path='registrars-new' element={<NewReg/>} />
           <Route path='directors-new' element={<NewRegg/>} />
           <Route path='admin-new' element={<NewAdmin/>} />
           <Route path='dcr-new' element={<NewReg2/>} />
           <Route path='pending-cert' element={<PendingCert/>} />
           <Route path='update-user/:id' element={<UpdateUser/>} /> */}


           {/* <Route path='single/:id' element={<SingleApplication/>} /> */}
          {/* <Route path='single' element={<SingleApplication/>} /> */}
        </Route>
       

       

        <Route path='login' element={<Login/>} />
        <Route path='unauth' element={<Unauthorized/>} />
      </Routes>
    </Router>
  );
};

export default App;
