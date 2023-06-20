import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Categories from "./Components/Categories/Categories";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import AboutUs from "./Components/About us/AboutUs";
import ContactUs from "./Components/Contact Us/ContatcUs";
import Profile from "./Components/Profile/Profile";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    // Logic to handle login
    setLoggedIn(true);
  };

  return (
    <>
      {!loggedIn && <Login onLogin={handleLogin} />}
      {loggedIn && (
        <>
          <Navbar />
          <Home />
          <Categories />
          <AboutUs/>
          <ContactUs/>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
