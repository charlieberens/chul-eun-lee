import React, { Component } from "react";
import styles from "../styles/components/video_list.module.scss";

interface State {
    err?: string;
    loading?: boolean;
    videos?: Array<{
        title: string;
        url: string;
        thumbnail: string;
        date?: string;
    }>;
}

export default class video_list extends Component<State> {
    state: State = {
        err: "",
        loading: false,
        videos: [
            {
                title: "North Korea’s sophistry in the hacking kingdom!?",
                url: "https://www.youtube.com/watch?v=0MNa7n52ISs",
                thumbnail:
                    "https://i.ytimg.com/vi/0MNa7n52ISs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM7YTWZWrA5ucDI-twldx1E9Hpeg",
            },
        ],
    };

    render() {
        return (
            <div>
                {this.state.videos.map((video) => (
                    <a href={video.url} className={styles.video}>
                        <img src={video.thumbnail} />
                        <h4>{video.title}</h4>
                    </a>
                ))}
            </div>
        );
    }
}
