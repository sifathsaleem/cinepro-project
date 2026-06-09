import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const VideoPlayerModel = ({ setIsVideoOpen, trailerKey }) => {
  const [videoSrc, setVideoSrc] = useState(
    `https://www.youtube.com/embed/${trailerKey}?si=5Dk9mnfmTlNgQ_9M&autoplay=1&loop=0&controls=0&color=white&modestbranding=0&playsinline=1&enablejsapi=1&playlist=${trailerKey}&hd720`,
  );

  const closePlayer = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="absolute bg-black inset-0 z-50 flex items-center justify-center">
      <button onClick={closePlayer} className="absolute top-10 left-10 bg-gray-500/50 backdrop-blur-sm p-3 rounded-full hover:cursor-pointer">
        <FaArrowLeft size={18} className="text-slate-100" />
      </button>
      <div className="yt-emmed-holder rounded-md w-full overflow-hidden aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&loop=0&controls=1&color=white&playsinline=1&modestbranding=0&enablejsapi=1&playlist=${trailerKey}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayerModel;
