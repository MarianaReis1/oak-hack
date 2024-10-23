"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import getLessonVideo from "../getLessonVideo";
import VideoJS from "@/component/VideoJS";
import MuxVideo from "@mux/mux-video-react";

interface LessonVideoProps {
  lessonSlug: string;
  playerWidth?: string;
  playerHeight?: string;
}

export const LessonVideoPlayer = (props: LessonVideoProps) => {
  const { lessonSlug, playerWidth, playerHeight } = props;

  const [lessonVideo, setLessonVideo] = useState<string | null>(null);
  const [isMuxVideo, setIsMuxVideo] = useState<boolean>(false);
  const [isMP4Video, setIsMP4Video] = useState<boolean>(false);

  const videoWidth = playerWidth || "100%";
  const videoHeight = playerHeight || "auto";

  useEffect(() => {
    async function fetchLessonVideo() {
      const response = await getLessonVideo(lessonSlug);

      if (response) {
        const firstVideo = response[0];
        const videoURL = firstVideo.url;
        if (firstVideo.stream) {
          // get playbackId from stream url
          const playbackId = videoURL.split("/").slice(-1)[0].slice(0, -5);
          //   console.log(playbackId);
          setLessonVideo(playbackId);
          setIsMuxVideo(true);
          setIsMP4Video(false);
        } else {
          setLessonVideo(response[0].url);
          setIsMuxVideo(false);
          setIsMP4Video(true);
        }
      }
    }

    fetchLessonVideo();
  }, [lessonSlug]);

  return (
    <>
      {isMuxVideo && (
        <>
          <MuxVideo
            style={{ width: videoWidth, height: videoHeight }}
            playbackId={lessonVideo || ""}
            metadata={{
              video_id: { lessonVideo },
              video_title: "Oak Lesson Video 1",
              viewer_user_id: "user_1",
            }}
            controls
          />
        </>
      )}
      {isMP4Video && (
        <>
          <Typography variant="h4" component="h4">
            Lesson MP4 Video
          </Typography>
          <VideoJS
            options={{
              autoplay: false,
              controls: true,
              sources: [
                {
                  src: lessonVideo || "",
                  type: "video/mp4",
                },
              ],
            }}
          />
        </>
      )}
    </>
  );
};

export default LessonVideoPlayer;
