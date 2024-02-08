const GOOGLE_API_KEY = "AIzaSyDD6Nlu_7gyz3G5o19h9w3wEWZBAwU8e7A";
const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;
export default YOUTUBE_VIDEO_API;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const OFFSET_LIVCHAT = 25;