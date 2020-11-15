import React from 'react';
import VideoItem from   './VideoItem'
const  VideoList =(props)=>{

    const rendeList = props.videos.map((video)=>{
        if (video.id.videoId) {
            return <VideoItem key={video.id.videoId} video={video}/>
        }else {
            return <VideoItem key={video.id.channelId} video={video}/>
        }

    })
    return <div className="ui relaxed divided list">
        {rendeList}
    </div>

}
export default VideoList;