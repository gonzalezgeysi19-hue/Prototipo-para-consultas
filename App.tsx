import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import PatientDashboard from './pages/patient/Dashboard';
import PatientJournal from './pages/patient/Journal';
import PatientSuccess from './pages/patient/Success';
import PatientActivities from './pages/patient/Activities';
import PatientProgress from './pages/patient/Progress';
import PatientSettings from './pages/patient/Settings';
import PsychologistDashboard from './pages/psychologist/Dashboard';
import PsychologistPatientProfile from './pages/psychologist/PatientProfile';
import PsychologistCreateActivity from './pages/psychologist/CreateActivity';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        
        {/* Patient Routes */}
        <Route path="/patient/home" element={<PatientDashboard />} />
        <Route path="/patient/journal" element={<PatientJournal />} />
        <Route path="/patient/journal/success" element={<PatientSuccess />} />
        <Route path="/patient/activities" element={<PatientActivities />} />
        <Route path="/patient/progress" element={<PatientProgress />} />
        <Route path="/patient/settings" element={<PatientSettings />} />

        {/* Psychologist Routes */}
        <Route path="/psychologist/home" element={<PsychologistDashboard />} />
        <Route path="/psychologist/patient/:id" element={<PsychologistPatientProfile />} />
        <Route path="/psychologist/create-activity" element={<PsychologistCreateActivity />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
