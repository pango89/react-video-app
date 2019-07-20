import "./VideoItem.css";
import React from "react";

class VideoItem extends React.Component {
  render() {
    return (
      <div
        onClick={() => this.props.onVideoSelect(this.props.video)}
        className="video-item item"
      >
        <img
          alt={this.props.video.snippet.title}
          className="ui image"
          src={this.props.video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
