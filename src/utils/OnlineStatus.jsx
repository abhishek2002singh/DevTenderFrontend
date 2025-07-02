import React, { useEffect, useState } from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-100 to-red-200 flex flex-col items-center justify-center text-center text-red-800 z-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-sm w-full animate-fade-in">
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-red-500 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold">You're Offline</h2>
        <p className="mt-2 text-sm text-gray-600">
          It seems you've lost your internet connection. Please check your network and try again.
        </p>
      </div>
    </div>
  );
};

export default OnlineStatus;
