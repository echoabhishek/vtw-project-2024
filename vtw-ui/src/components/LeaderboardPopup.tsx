import React from 'react';

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
      <div className="bg-[#F3FE74] rounded-2xl p-8 w-4/5 h-4/5 relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Leaderboard</h2>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-xl w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-gray-200"
        >
          &times;
        </button>
        <div className="overflow-auto h-[calc(100%-4rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {users.map((user, index) => (
              <div key={index} className="p-4 flex flex-col items-center space-y-[13px]">
                <img 
                  src={user.photoUrl} 
                  alt={user.name} 
                  className="w-28 h-28 rounded-full object-cover mb-2 border-2 border-[#333333]"
                />
                <h3 className="font-bold text-center text-3xl">{user.name}</h3>
                <p className="text-2xl font-semibold text-center">{user.tokens} tokens</p>
                <p className="text-2xl text-gray-600 text-center">{user.title}</p>
                <p className="text-2xl text-center">{user.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPopup;