// Generated with util/create-component.js
import React, { useEffect, useRef } from "react";
import { VideoHlsProps } from "./VideoHls.types";
import style from "./VideoHls.scss";
import { BEM } from "../../libs/BEM";
import Hls from 'hls.js'
const VideoHls: React.FC<VideoHlsProps> = (props) => {
    const bm = new BEM("VideoHls", {}, style);
    bm.Append(props.className);
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        video.controls = true
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // This will run in safari, where HLS is supported natively
            video.src = props.src
        } else if (Hls.isSupported()) {
            // This will run in all other modern browsers
            const hls = new Hls()
            hls.loadSource(props.src)
            hls.startLoad();
            hls.attachMedia(video)
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        } else {
            console.error(
                'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
            )
        }
    }, [props.src, videoRef])
    return (
        <div className={bm.toString()} style={props.style}>
            <video ref={videoRef} autoPlay/>
            <style
                // @ts-ignore
                jsx
            >{`
            video {
              max-width: 100%;
            }
          `}</style>
        </div>
    );
}

export default VideoHls;

