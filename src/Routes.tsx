import { BrowserRouter, Routes as Nav, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import ErrPage from "./Components/ErrPage";
import Login from "./Components/Login";
import Register from "./Components/RegistrationPage";

const Routes = () => {
    return (
        <BrowserRouter>
            <Nav>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route path="/*" element={<ErrPage />} />
            </Nav>
        </BrowserRouter>
    );
};

export default Routes;
