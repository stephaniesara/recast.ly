var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: key,
      part: 'snippet',
      q: query,
      maxResults: max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: (data) => {
      callback(data.items);
    },
    error: (responseJSON) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    } 
  });
};

window.searchYouTube = searchYouTube;

