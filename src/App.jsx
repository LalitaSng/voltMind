import './App.css'
import LoginPage from './components/loginPage'
import LoginWithGitHub from './components/LoginWithGitHub';
import RequestAccessPage from './components/RequestAccessPage';
import RequestSubmittedPage from './components/RequestSubmittedPage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loginwithgithub" element={<LoginWithGitHub/>} />
          <Route path="/requestaccess" element={<RequestAccessPage/>} />
          <Route path="/requestSubmitted" element={<RequestSubmittedPage/>}/>
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    );
}

export default App
