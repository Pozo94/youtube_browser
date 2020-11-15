import axios from  'axios';
const KEY='AIzaSyAWdY6VLywYn64b0x8W6e98ohAy1k_XH7M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }

})

