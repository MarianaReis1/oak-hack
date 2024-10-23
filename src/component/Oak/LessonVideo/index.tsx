"use client";
import React, { useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import getLessonVideo from "../getLessonVideo";
import VideoJS from "@/component/VideoJS";
// import MuxPlayer from "@mux/mux-player-react/lazy";
import MuxVideo from "@mux/mux-video-react";

export const LessonVideo = () => {
  const [lessonSlug, setLessonSlug] = useState("");
  const [lessonVideo, setLessonVideo] = useState<string | null>(null);
  const [isMuxVideo, setIsMuxVideo] = useState<boolean>(false);
  const [isMP4Video, setIsMP4Video] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await getLessonVideo(lessonSlug);

    if (response) {
      const firstVideo = response[0];
      const videoURL = firstVideo.url;
      if (firstVideo.stream) {
        // get playbackId from stream url
        // strip off the last part of the url
        const playbackId = videoURL.split("/").slice(-1)[0].slice(0, -5);
        // console.log(playbackId);
        setLessonVideo(playbackId);
        setIsMuxVideo(true);
        setIsMP4Video(false);
      } else {
        setLessonVideo(response[0].url);
        setIsMuxVideo(false);
        setIsMP4Video(true);
      }
    }

    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack gap={3} alignItems="start">
          <TextField
            type="text"
            label="Lesson Slug"
            placeholder="e.g. demonstrating-pythagoras-theorem"
            value={lessonSlug}
            onChange={(e) => setLessonSlug(e.target.value)}
          />

          <LoadingButton
            type="submit"
            disabled={loading}
            loading={loading}
            variant="contained"
          >
            Load Video
          </LoadingButton>
        </Stack>
      </form>
      {isMuxVideo && (
        <>
          <Typography variant="h4" component="h4">
            Lesson Mux Video
          </Typography>
          <MuxVideo
            style={{ width: "100%" }}
            playbackId={lessonVideo || ""}
            metadata={{
              video_id: { lessonVideo },
              video_title: "Oak Lesson Video 1",
              viewer_user_id: "user_1",
            }}
            controls
            autoPlay
          />
        </>
      )}
      {isMP4Video && (
        <>
          <Typography variant="h4" component="h4">
            Lesson MP4 Video
          </Typography>
          <VideoJS>
            <source src={lessonVideo || ""} type="video/mp4"></source>
          </VideoJS>
        </>
      )}
    </>
  );
};

export default LessonVideo;
