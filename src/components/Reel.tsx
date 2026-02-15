import React from "react";

const Reel: React.FC = () => {
  return (
    <div className="w-full h-fit md:h-screen flex items-center justify-center bg-stone-950 overflow-hidden">
      <video
        src="https://cdn.cuberto.com/cb/showreel/2.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover min-h-[50vh] md:min-h-screen"
      />
    </div>
  );
};

export default Reel;
