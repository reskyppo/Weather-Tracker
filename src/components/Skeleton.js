import React from "react";

const Skeleton = () => {
  return (
    <div className="w-1/4 px-4 py-2">
      <div className="animate-pulse">
        <div className="flex space-x-6">
          <div className="space-y-6">
            <div className="w-40 h-4 bg-gray-400 rounded"></div>
            <div className="space-y-3">
              <div className="w-48 h-4 bg-gray-400 rounded"></div>
              <div className="w-32 h-4 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
