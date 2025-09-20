"use client";
import React, { useState } from "react";
import Image from "next/image";

interface YouTubeEmbedProps {
  videoId: string;      // YouTube video ID
  thumbnail?: string;   // Optional custom thumbnail
  title?: string;       // Video title
}

export  function YouTubeEmbed({
  videoId,
  thumbnail,
  title = "YouTube Video",
}: YouTubeEmbedProps) {
  const [play, setPlay] = useState(false);

  // Default YouTube thumbnail if none provided
  const videoThumbnail =
    thumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
      {!play ? (
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => setPlay(true)}
        >
          <Image
            src={videoThumbnail}
            alt=''
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold">
              ▶ Play
            </button>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      )}

      {/* Optional link to YouTube */}
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 text-white bg-black/50 px-3 py-1 rounded hover:bg-black/70 text-sm"
      >
        Watch on YouTube
      </a>
    </div>
  );
}
