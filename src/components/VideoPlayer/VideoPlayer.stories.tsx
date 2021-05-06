// Generated with util/create-component.js
import React from "react";
import VideoPlayer from "./VideoPlayer";

export default {
    title: "Video/VideoPlayer"
};

export const Default = () => {
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        sources: [
            {
                src: 'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8',
                type: 'application/x-mpegURL',
                size: "576"
            },{
                src: 'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8',
                type: 'application/x-mpegURL',
                size: "720"
            },
        ],
    }
    return <VideoPlayer
        {...videoJsOptions}
    />;
}