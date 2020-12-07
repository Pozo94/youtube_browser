import React from 'react';
import VideoItem from   './VideoItem'
const  VideoList =({videos,onVideoSelect})=>{

    const rendeList = videos.map((video)=>{
        if (video.id.videoId) {
            return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>
        }else {
            return <VideoItem onVideoSelect={onVideoSelect} key={video.id.channelId} video={video}/>
        }

    })
    return <div className="ui relaxed divided list">
        {rendeList}
    </div>

}
export default VideoList;