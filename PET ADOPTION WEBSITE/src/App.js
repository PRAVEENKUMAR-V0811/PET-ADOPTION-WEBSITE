import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Pets from "./Components/Pets/Pets";
import AdoptForm from "./Components/AdoptForm/AdoptForm";
import LandingPage from "./Components/LandingPage/LandingPage";
import SignInPage from "./Components/Login/Login";
import SignUpPage from "./Components/Signup/Signup";
import MainNav from "../src/Components/NavBar/MainNav.jsx";
import ForgetPasswordPage from "./Components/Password/Password";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainNav/>
                
                <LandingPage/>
                {/* <Footer title="PawFinds" /> */}
              </>
            }
          />
    
          <Route
            path="/services"
            element={
              <>
                <Navbar title="PawFinds" />
                <Services />
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar title="PawFinds" />
                <Contact />
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/pets"
            element={
              <>
                <Navbar title="PawFinds" />
                <Pets />
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/adopt-form"
            element={
              <>
                <Navbar title="PawFinds" />
                <AdoptForm />
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <MainNav/>
                <SignInPage/>
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/Register"
            element={
              <>
                <MainNav/>
                <SignUpPage/>
                <Footer title="PawFinds" />
              </>
            }
          />
          <Route
            path="/forget-password"
            element={
              <>
                <MainNav/>
                <ForgetPasswordPage/>
                <Footer title="PawFinds" />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
