import React from 'react';
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

class App extends React.Component{

    state={
        videos:[],
        selectedVideo:null

    }
    onTermSubmit=async (term)=>{
        console.log(term);
        const response= await youtube.get('/search',{
            params: {
                q: term
            }
        });
        this.setState({videos:response.data.items});

    }


    render() {

        return (
            <div>
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                    <VideoList videos={this.state.videos}/>
                </div>

            </div>);


    }

};
export default App;