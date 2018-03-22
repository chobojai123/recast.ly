class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      clicked: false,
      videos: exampleVideoData,
      currVideo: exampleVideoData[0]
    };

    this.onClickVideoHandler = this.onClickVideoHandler.bind(this);
  }
  
  onClickVideoHandler(videoClicked){
    this.setState({
      currVideo : videoClicked
    });
  }

  render(){
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em></h5></div>
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
