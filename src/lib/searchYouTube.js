var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    part: 'snippet',
    type: 'GET',
    success: console.log('search'),
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max
    },
    videoEmbeddable: true
  });
};

window.searchYouTube = searchYouTube;
