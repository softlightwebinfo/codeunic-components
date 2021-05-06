// Generated with util/create-component.js
import React, { useState } from "react";
import { VideoPlayerProps } from "./VideoPlayer.types";
import { BEM } from "../../libs/BEM";
import "./VideoPlayer.scss";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoHls from "../VideoHls/VideoHls";

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
    const [isStarted, setIsStarted] = useState(false);
    const bm = new BEM("VideoPlayer", {isStarted});
    bm.Append(props.className);

    return (
        <div className={bm.toString()} style={props.style}>
            {isStarted ? (
               <VideoHls src={props.src}/>
            ) : (
                <div className={bm.Children("content")} onClick={() => setIsStarted(true)}>
                    <FontAwesomeIcon icon={faPlayCircle}/>
                    <img
                        alt="Replay poster"
                        style={{cursor: 'pointer'}}
                        src={props.poster}
                    />
                </div>
            )}
        </div>
    )
}

export default VideoPlayer;