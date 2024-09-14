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
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-xl w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-gray-200"
        >
          &times;
        </button>
        <div className="overflow-auto h-[calc(100%-4rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user, index) => (
              <div key={index} className="p-4 flex flex-col items-center space-y-2 border border-gray-200 rounded-lg">
                <img src={user.photoUrl} alt={user.name} className="w-20 h-20 rounded-full object-cover mb-2" />
                <h3 className="font-bold text-center">{user.name}</h3>
                <p className="text-sm text-gray-600 text-center">{user.title}</p>
                <p className="text-sm text-center">{user.company}</p>
                <p className="text-sm font-semibold text-center">{user.tokens} tokens</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPopup;