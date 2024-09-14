// SignOut.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const SignOut: React.FC = () => {
  const { signOut } = useAuth(); // Destructure the signOut function from AuthContext
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Automatically sign out the user when this component is mounted
  useEffect(() => {
    signOut();
    navigate("/"); // Redirect to the sign-in page after sign-out
  }, [signOut, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-secondary">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-primary mb-6">
          Signing you out...
        </h1>
        <p className="text-center text-primary-foreground">
          You are being signed out. Please wait...
        </p>
      </div>
    </div>
  );
};

export default SignOut;
