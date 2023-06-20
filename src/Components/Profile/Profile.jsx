import React, { useState, useEffect } from 'react';
import { BiImageAdd } from 'react-icons/bi';

const UserProfile = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('505-876-8544');
  const [avatar, setAvatar] = useState('https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png');

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      const { firstName, lastName, email, phone, avatar } = JSON.parse(userDetails);
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
      setPhone(phone);
      setAvatar(avatar);
    }
  }, []);

  useEffect(() => {
    const userDetails = {
      firstName,
      lastName,
      email,
      phone,
      avatar
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  }, [firstName, lastName, email, phone, avatar]);

  const handleSaveChanges = () => {
    // Perform logic to save changes to the profile
    // You can update the state or make an API call here
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setAvatar(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="max-w-3xl mx-auto bg-white rounded-lg px-6 py-8">
          <div className="flex items-center mb-6">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-bold">{firstName} {lastName}</h2>
              <p className="text-gray-500">{email}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-black mb-2">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-black mb-2">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-black mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-black mb-2">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-3 border-gray-300 text-black p-2 rounded-md border-[1px] text-center w-40 cursor-pointer">
                <BiImageAdd size={24}/>
                <label className="cursor-pointer" htmlFor="upload-file">Choose File</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="w-full"
                  id="upload-file"
                  hidden
                />
              </div>
            </div>
            <div className="mt-3">
              <button onClick={handleSaveChanges} className="bg-black text-white py-2 px-4 rounded-md">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
