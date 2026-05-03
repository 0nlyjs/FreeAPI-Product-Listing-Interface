import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm animate-pulse flex flex-col h-full">
      {/* Image Skeleton */}
      <div className="aspect-square w-full bg-white/10"></div>
      
      {/* Content Skeleton */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Brand & Rating */}
        <div className="mb-2 flex justify-between">
          <div className="h-4 w-1/3 bg-white/10 rounded"></div>
          <div className="h-4 w-1/4 bg-white/10 rounded"></div>
        </div>
        
        {/* Title */}
        <div className="h-6 w-3/4 bg-white/10 rounded mb-2"></div>
        
        {/* Description */}
        <div className="space-y-2 mb-4 flex-grow">
          <div className="h-3 w-full bg-white/10 rounded"></div>
          <div className="h-3 w-5/6 bg-white/10 rounded"></div>
        </div>
        
        {/* Price & Button */}
        <div className="mt-auto">
          <div className="h-8 w-1/3 bg-white/10 rounded mb-4"></div>
          <div className="h-10 w-full bg-white/10 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
