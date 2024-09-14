import React, { useState } from 'react';

const avatars = ['Builder', 'Wizard', 'Dragon Boat Scrum Master'];
const roles = ['PM', 'Dev', 'Designer'];

const UserProfile = () => {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the profile data
    console.log({ name, selectedAvatar, selectedRole });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Avatar</label>
          {avatars.map(avatar => (
            <label key={avatar} className="inline-flex items-center mr-4">
              <input
                type="radio"
                value={avatar}
                checked={selectedAvatar === avatar}
                onChange={(e) => setSelectedAvatar(e.target.value)}
                className="mr-2"
              />
              {avatar}
            </label>
          ))}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Role</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Select a role</option>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;