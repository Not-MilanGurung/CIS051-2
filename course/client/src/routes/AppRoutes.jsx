import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "../components/NavbarComponent";
// Views
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import FormPage from "../pages/FormPage";

function AppRoute() {
    return(
        <BrowserRouter>
            <NavBar title="Course Management"/>
            <Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/about" element={<AboutPage />}/>
				<Route path="/contact" element={<ContactPage />}/>
				<Route path="/login" element={<LoginPage />}/>
				<Route path="/signup" element={<SignUpPage />}/>
				<Route path="/form" element={<FormPage />}/>
			</Routes>
        </BrowserRouter>
    )
}

export default AppRoute;