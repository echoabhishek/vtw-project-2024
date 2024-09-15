import React from 'react';
import profilePic from '../assets/profilepic.png'; // Import the profile picture

interface ProfilePopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#F3FE74] rounded-lg p-8 w-[90%] max-w-2xl relative"> {/* Increased width by 30% */}
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl">X</button> {/* Close button */}
                <div className="flex items-center mb-4">
                    <img 
                        src={profilePic} 
                        alt="Profile" 
                        className="w-24 h-24 rounded-full mr-4 border-2 border-[#333333]" // Increased size and added border
                    /> 
                    <div>
                        <h2 className="text-2xl font-bold">Kobe T. Dawg</h2> {/* Updated user name */}
                        <p className="text-lg">CCO</p> {/* Updated job title */}
                    </div>
                    <div className="ml-auto flex flex-col items-center"> {/* Centered alignment for quests */}
                        <div className="text-3xl font-bold">5</div> {/* Larger number for quests */}
                        <p>Quests</p> {/* Quests label */}
                    </div>
                    <div className="ml-4 flex flex-col items-center"> {/* Centered alignment for tokens */}
                        <div className="text-3xl font-bold text-[#998321]">10</div> {/* Larger number for tokens with updated color */}
                        <p className="text-[#998321]">Tokens</p> {/* Tokens label with updated color */}
                    </div>
                </div>
                <hr className="my-4 border-[#333333]" /> {/* Break line with updated color */}
                <div>
                    <h3 className="font-bold">About</h3>
                    <p>Who's a good boy? You are! Yes you are a good boy you are the best boy!</p> {/* Updated About section */}
                </div>
                <div className="mt-4">
                    <h3 className="font-bold">Socials</h3>
                    <a href="https://example.com" className="text-blue-500">Only Paws</a> {/* Updated personal website */}
                    <br />
                    <a href="https://linkedin.com/in/example" className="text-blue-500">LinkedIn</a> {/* LinkedIn link */}
                </div>
            </div>
        </div>
    );
};

export default ProfilePopup;