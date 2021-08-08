import React, { Component } from 'react'
import styles from '../styles/components/video_list.module.scss'

interface State {
    err?: string;
    loading?: boolean;
    videos?: Array<{
        title: string,
        url: string,
        thumbnail: string,
        date: string
    }>;
}

export default class video_list extends Component<State> {
    state = {
        err: '',
        loading: false,
        videos: []
    }

    render() {
        return (
            <div>
                {this.state.videos.map(video => 
                    <div className={styles.video}>
                        <h1>Video Title</h1>
                    </div>    
                )}    
            </div>
        )
    }
}
