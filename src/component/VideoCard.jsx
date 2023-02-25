import React, { useState } from 'react';

function VideoCard({ videoUrl, imageUrl }) {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div
      className="video-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hovering ? (
        <video src={videoUrl} autoPlay
        controls
        style={{objectFit:'contain',maxHeight:300}}
        />
      ) : (
        <img src={imageUrl} alt="Thumbnail" />
      )}
    </div>
  );
}

export default VideoCard;
