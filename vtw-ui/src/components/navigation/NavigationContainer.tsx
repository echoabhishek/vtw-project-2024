import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tokenIcon from '../../assets/token.png';
import profileImage from '../../assets/profilepic.png';
import ProfilePopup from '../ProfilePopup';
import LeaderboardPopup from '../LeaderboardPopup';

interface UserProfile {
    name: string;
    title: string;
    tokens: number;
    company: string;
    photoUrl: string;
  }

interface NavigationContainerProps {
  tokenCount: number;
  users: UserProfile[]; // Replace with your user type
}

const NavigationContainer: React.FC<NavigationContainerProps> = ({ tokenCount, users }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  return (
    <>
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F3FE74] rounded-full shadow-lg w-[95%] max-w-80 sm:max-w-96">
        <ul className="flex items-center justify-between px-3 py-2">
          <li className="cursor-pointer flex-shrink-0" onClick={() => setIsProfileOpen(true)}>
            <img src={profileImage} alt="Profile" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full" />
          </li>
          <li className="flex items-center flex-shrink-0">
            <img src={tokenIcon} alt="Token" className="w-5 h-5 sm:w-6 sm:h-6 rounded-full mr-1" />
            <span className="font-bold text-xs sm:text-sm" style={{ color: '#998321' }}>{tokenCount}</span>
          </li>
          <li className="flex-shrink-0">
            <Link to="/map" className="text-black hover:text-gray-700 whitespace-nowrap text-xs sm:text-sm">World</Link>
          </li>
          <li>
            <Link to="/quests" className="text-black hover:text-gray-700 whitespace-nowrap text-xs sm:text-sm">My Quests</Link>
          </li>
          <li className="shrink-0">
            <button
              onClick={() => setIsLeaderboardOpen(true)}
              className="text-black hover:text-gray-700 whitespace-nowrap text-xs sm:text-sm"
            >
              Leaderboard
            </button>
          </li>
        </ul>
      </nav>
      <ProfilePopup
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
      <LeaderboardPopup
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        users={users}
      />
    </>
  );
};

export default NavigationContainer;