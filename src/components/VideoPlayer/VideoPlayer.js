import React, { PureComponent } from 'react';
import videoSrc from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
	videoRef = React.createRef();

	playVideo = () => {
		this.videoRef.current.play();
	};

	stopVideo = () => {
		this.videoRef.current.pause();
	};

	render() {
		return (
			<div className="video-player">
				<video className="video-player__source" ref={ this.videoRef }>
					<source src={ videoSrc } type="video/mp4" />
				</video>

				<div className="buttons">
					<button onClick={ this.playVideo }>Play</button>
					<button onClick={ this.stopVideo }>Stop</button>
				</div>
			</div>
		);
	}
}

export default VideoPlayer;