"use client";
import React, { useState } from "react";
import Image from "next/image";

interface YouTubeEmbedProps {
  videoId: string;      // YouTube video ID
  thumbnail?: string;   // Optional custom thumbnail
  title?: string;       // Video title
}

export function YouTubeEmbed({
  videoId,
  thumbnail,
  title = "YouTube Video",
}: YouTubeEmbedProps) {
  const [play, setPlay] = useState(false);


  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
      {!play ? (
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => setPlay(true)}
        >
          {/* ✅ FIX: give Image explicit `fill` container */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="object-cover rounded-xl w-full h-full"
            loading="eager"
          />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <button className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg">
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

      {/* Watch on YouTube link */}
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 text-white bg-black/60 px-3 py-1 rounded hover:bg-black/80 text-sm"
      >
        Watch on YouTube
      </a>
    </div>

  );
}
