import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoItem from "./VideoItem";
import VideoDetail from "./VideoDetail";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null

    }
    onVideoSelect = async (video) => {
        await this.setState({selectedVideo: video});

    }

    onTermSubmit = async (term) => {
        console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }

        });
        this.setState({
            videos: response.data.items,
            selectedVideo: null

        });

    }


    render() {

        return (
            <div>
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                    <div className="ui grid">
                        <div className='ui row'>
                            <div className="ten wide column">
                                <VideoDetail video={this.state.selectedVideo}/>

                            </div>
                            <div className="six wide column">

                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>

                            </div>
                        </div>
                    </div>
                </div>

            </div>);


    }

};
export default App;