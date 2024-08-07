import React from 'react';
import VideoCard from './VideoCard'; // Adjust the path as needed

interface VideoData {
  videoSrc: string; // URL of the video
  content: string;
}

interface VideoGalleryProps {
  videos: VideoData[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <VideoCard key={index} videoSrc={video.videoSrc} content={video.content} />
      ))}
    </div>
  );
};

export default VideoGallery;
