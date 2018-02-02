class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selected: {}
    };
    this.handleQuery = _.debounce(this.handleQuery, 200, true);
  }
  
  componentDidMount() {
    this.handleQuery('', true);
  }
  
  
  handleSelect(video) {
    this.setState({
      selected: video
    });
  }
  
  handleQuery(query, bool) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 5
    };
    var cb = (videos) => {
      if (bool) { 
        this.setState({
          videos: videos,
          selected: videos[0]
        });
      } else {
        this.setState({
          videos: videos
        });
      }
    };
    this.props.searchYouTube(options, cb);
  }
  
  
  
  render() {
    
    if ((this.state.videos).length === 0) {
      return <div className="video-player video-list"><h1>Loading...</h1></div>;
    }
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSubmit={this.handleQuery.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selected} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onSelect={this.handleSelect.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;