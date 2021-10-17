import React from 'react';

const BackgroundVideo = ({ videoSource, children }) => {
  return (
    <>
      <div className="Container">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          id="video"
          >
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        {children}
      </div>
    </>
  )
}

export default BackgroundVideo