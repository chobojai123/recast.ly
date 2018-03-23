class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      clicked: false,
      videos: [],
      currVideo: exampleVideoData[0],
    };

    this.onClickVideoHandler = this.onClickVideoHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.getYouTubeVideo = _.debounce(this.getYouTubeVideo.bind(this), 500);
  }

  componentDidMount(){
    this.getYouTubeVideo('react tutorials');
  }

  getYouTubeVideo(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currVideo: videos[0]
      })
    );
  }

  
  onClickVideoHandler(videoClicked){
    this.setState({
      currVideo : videoClicked
    });
  }

  onChangeHandler(event){
    this.setState({value: event.target.value});
  }
  
  render(){
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.getYouTubeVideo}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.currVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} videoClicked={this.onClickVideoHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
