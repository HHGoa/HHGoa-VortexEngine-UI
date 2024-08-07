import React, { useEffect, useRef } from 'react';

interface VideoCardProps {
  videoSrc: string; // YouTube video ID or URL
  content: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoSrc, content }) => {
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start playing the video
            videoRef.current?.setAttribute('src', videoRef.current?.getAttribute('data-src') || '');
          } else {
            // Pause the video
            videoRef.current?.setAttribute('src', '');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);

  // Convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <div className="card w-[80%] mx-auto overflow-hidden">
      <div className="border-2 gradient-border rounded w-full h-[400px]">
      <div className="video-container ">
        <iframe
          ref={videoRef}
          data-src={getYouTubeEmbedUrl(videoSrc)}
          width="500"
          height="315"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <p>{content}</p>
      </div>
      </div>
    </div>
  );
};

export default VideoCard;
