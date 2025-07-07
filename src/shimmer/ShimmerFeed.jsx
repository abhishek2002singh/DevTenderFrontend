import React from "react";

const ShimmerFeed = () => {
  return (
    <div className="flex flex-col justify-center gap-5"> {/* Added flex container for centering */}
      <div className="w-3/6 h-96 animate-pulse bg-gray-200 rounded-lg shadow-md p-4 mx-auto"> {/* Added mx-auto for horizontal centering */}
        <div className="flex items-center space-x-4">
          {/* Shimmer for profile picture */}
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          {/* Shimmer for user details */}
          <div className="flex-1 space-y-3">
            <div className="h-20 bg-gray-300 rounded w-3/4"></div>
            <div className="h-20 bg-gray-300 rounded w-1/2"></div>
            <div className="h-20 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
        {/* Shimmer for additional content */}
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>
      <div className="w-3/6 h-96 animate-pulse bg-gray-200 rounded-lg shadow-md p-4 mx-auto"> {/* Added mx-auto for horizontal centering */}
        <div className="flex items-center space-x-4">
          {/* Shimmer for profile picture */}
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          {/* Shimmer for user details */}
          <div className="flex-1 space-y-3">
            <div className="h-20 bg-gray-300 rounded w-3/4"></div>
            <div className="h-20 bg-gray-300 rounded w-1/2"></div>
            <div className="h-20 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
        {/* Shimmer for additional content */}
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>
      <div className="w-3/6 h-96 animate-pulse bg-gray-200 rounded-lg shadow-md p-4 mx-auto"> {/* Added mx-auto for horizontal centering */}
        <div className="flex items-center space-x-4">
          {/* Shimmer for profile picture */}
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          {/* Shimmer for user details */}
          <div className="flex-1 space-y-3">
            <div className="h-20 bg-gray-300 rounded w-3/4"></div>
            <div className="h-20 bg-gray-300 rounded w-1/2"></div>
            <div className="h-20 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
        {/* Shimmer for additional content */}
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerFeed;