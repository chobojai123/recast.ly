var searchYouTube = ({key, query, max = 5} , callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search',{
    q: query,
    key: key,
    maxResults: max,
    videoEmbeddable: true,
    part: 'snippet',
    type: 'video'
  }).done(data => callback(data.items)).fail(error => console.log('error', error));

};

window.searchYouTube = searchYouTube;

