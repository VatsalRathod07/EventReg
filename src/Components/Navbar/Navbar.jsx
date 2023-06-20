import React, { useState } from 'react';
import { BiUserCircle, BiMenu } from 'react-icons/bi';
import UserProfile from '../Profile/Profile'; // Import the UserProfile component

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false); // New state for the profile

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };


  return (
    <header className="container mx-auto fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-20 backdrop-filter backdrop-blur-xl">
      <nav className="flex justify-between items-center p-4">
        <h3 className="text-white text-2xl font-bold">Event Aura</h3>

        <div className="flex items-center">
          <div className="hidden md:flex gap-10">
            <a href="#home" className="text-white cursor-pointer">
              Home
            </a>

            <a href="#categories" className="text-white cursor-pointer">
              Categories
            </a>

            {loggedIn && (
              <a href="#event" className="text-white cursor-pointer">
                Event
              </a>
            )}

            <a href="#about" className="text-white cursor-pointer">
              About
            </a>

            <a href="#contact" className="text-white cursor-pointer">
              Contact
            </a>

            <BiUserCircle
              size={25}
              className="text-white cursor-pointer"
              onClick={toggleProfile} // Call toggleProfile when the icon is clicked
            />
          </div>

          <BiMenu
            size={25}
            className="text-white cursor-pointer md:hidden"
            onClick={toggleSidebar}
          />
        </div>
      </nav>

      {sidebarOpen && (
        <div className="fixed top-0 left-0 h-screen w-full bg-black">
          <div className="flex flex-col items-end pt-8 pr-8 bg-black">
            <BiMenu
              size={30}
              className="text-white cursor-pointer mb-4"
              onClick={toggleSidebar}
            />
          </div>


          <div className="flex flex-col items-center justify-center pt-10 bg-black">
            <div className="flex flex-col gap-10 text-center">
              <a href="#home" className="text-white cursor-pointer text-xl">
                Home
              </a>

              <a href="#categories" className="text-white cursor-pointer text-xl">
                Categories
              </a>

              {loggedIn && (
                <a href="#event" className="text-white cursor-pointer text-xl">
                  Event
                </a>
              )}

              <a href="#about" className="text-white cursor-pointer text-xl">
                About
              </a>

              <a href="#contact" className="text-white cursor-pointer text-xl">
                Contact
              </a>

              <a href="#contact" className="text-white cursor-pointer text-xl">
              {profileOpen && <UserProfile />}
              </a>
            </div>

            <p></p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
