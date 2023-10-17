import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AttendancePage from './components/AttendancePage';
import ForgetPassword from './components/ForgetPassword';
import PageNot from './components/PageNot';
import AuthEmail from './components/AuthEmail';
import ResetPassword from './components/Helpers/ResetPassword';
import HomePage from './components/HomePage';
import StudentPage from './Student/StudentPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/attendance' element={<AttendancePage />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />

        {/* Protected Routes  */}
        <Route path="/forgetpassword/verify" element={<AuthEmail />}>
          <Route
            path="resetpassword"
            element={<Outlet />}
            children={
              <Route index element={<ResetPassword />} /> /* ResetPassword route */
            }
          />
        </Route>

        <Route path='/student' element={<StudentPage />} />



        <Route path='*' element={<PageNot />} />
      </Routes>
    </div >
  );
}

export default App;
