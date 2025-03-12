import React from "react";

const ShimmerFeed = () => {
  return (
    <div className="flex flex-col space-y-6 p-6">
    
    
      <div className="animate-pulse flex items-center space-x-4 p-4 bg-gray-300 rounded-lg shadow-md">
        <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
        <div className="flex-1 space-y-3">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
        </div>
      </div>

      {/* post */}
      {[1, 2, 3].map((_, index) => (
        <div key={index} className="animate-pulse p-6 bg-gray-300 rounded-lg shadow-md">
          <div className="h-6 bg-gray-400 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-400 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerFeed;
