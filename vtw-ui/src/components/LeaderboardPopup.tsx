import React from 'react';
import tokenIcon from '../assets/token.png'; // Ensure the correct path to the token icon

interface UserProfile {
  name: string;
  title: string;
  tokens: number;
  company: string;
  photoUrl: string;
}

interface LeaderboardPopupProps {
  isOpen: boolean;
  onClose: () => void;
  users: UserProfile[];
}

const LeaderboardPopup: React.FC<LeaderboardPopupProps> = ({ isOpen, onClose, users }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#F3FE74] rounded-2xl p-6 w-4/5 h-4/5 relative"> {/* Reduced padding */}
        <h2 className="text-2xl font-bold mb-2 text-center">Leaderboard</h2> {/* Reduced margin */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-xl w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-gray-200"
        >
          &times;
        </button>
        <div className="overflow-auto h-[calc(100%-4rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Reduced gap */}
            {users.map((user, index) => (
              <div key={index} className="p-2 flex flex-col items-center space-y-2"> {/* Reduced padding and space */}
                <img 
                  src={user.photoUrl} 
                  alt={user.name} 
                  className="w-24 h-24 rounded-full object-cover mb-1 border-2 border-[#333333]" // Reduced size and margin
                />
                <h3 className="font-bold text-center text-2xl">{user.name}</h3> {/* Reduced font size */}
                <p className="text-xl font-semibold text-center text-[#998321] flex items-center"> {/* Updated font size */}
                  <img src={tokenIcon} alt="Token" className="w-5 h-5 mr-1" /> {/* Token icon */}
                  {user.tokens} tokens
                </p>
                <p className="text-xl text-gray-600 text-center">{user.title}</p> {/* Updated font size */}
                <p className="text-xl text-center">{user.company}</p> {/* Updated font size */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPopup;