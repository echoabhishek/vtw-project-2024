import React from 'react';

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
                    <img src="path/to/profilepic.png" alt="Profile" className="w-16 h-16 rounded-full mr-4" /> {/* Circular profile picture */}
                    <div>
                        <h2 className="text-2xl font-bold">User Name</h2> {/* User name */}
                        <p className="text-lg">Job Title</p> {/* Job title */}
                    </div>
                    <div className="ml-auto flex flex-col items-center"> {/* Centered alignment for quests */}
                        <div className="text-3xl font-bold">5</div> {/* Larger number for quests */}
                        <p>Quests</p> {/* Quests label */}
                    </div>
                    <div className="ml-4 flex flex-col items-center"> {/* Centered alignment for tokens */}
                        <div className="text-3xl font-bold">10</div> {/* Larger number for tokens */}
                        <p>Tokens</p> {/* Tokens label */}
                    </div>
                </div>
                <hr className="my-4 border-[#333333]" /> {/* Break line with updated color */}
                <div>
                    <h3 className="font-bold">About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> {/* About section */}
                </div>
                <div className="mt-4">
                    <h3 className="font-bold">Socials</h3>
                    <a href="https://example.com" className="text-blue-500">Personal Website</a> {/* Personal website link */}
                    <br />
                    <a href="https://linkedin.com/in/example" className="text-blue-500">LinkedIn</a> {/* LinkedIn link */}
                </div>
            </div>
        </div>
    );
};

export default ProfilePopup;