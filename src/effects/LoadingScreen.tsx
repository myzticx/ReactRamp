import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

interface LoadingScreenProps {
  children: React.ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true); // New state

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false); // Hide the loading screen
      setIsInitialLoading(false); // Set initial loading state to false
    }, 1500); // Adjust the duration as needed
  }, []);

  return (
    <div className="loading-screen">
      {isInitialLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <div className="loading-text">ReactRamp is loading...</div>
        </div>
      ) : isLoading ? (
        <div className="loading-text">ReactRamp is loading...</div>
      ) : (
        children
      )}
    </div>
  );
};

export default LoadingScreen;
