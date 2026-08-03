import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './pages/Login/Login';
import Register from './pages/Register/Registrer';
import Dashboard from './pages/Dashboard/Dashboard';
import Layout from './component/Layout/Layout';
import DashboardDetail from './pages/DashboardDetail/DashboardDetail';
//import Header from './component/Header/Header';
//import Sidebar from './component/Sidebar/sidebar';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/dashboard" element={<Layout><Dashboard/></Layout>}/>
          <Route path="/dashboard/:professorId" element={<Layout><DashboardDetail/></Layout>}/>
          {/* <Route path="/Header" element={<Header/>}/> */}
          {/*<Route path="/sidebar" element={<Sidebar/>}/>*/}

      </Routes>
    </BrowserRouter>
  );
}

export default App;