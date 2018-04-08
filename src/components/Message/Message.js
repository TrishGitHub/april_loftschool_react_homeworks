import React, { Component } from 'react';
import './Message.css';

class Message extends Component {

	render() {
		return (
			<li className="clearfix">
				<div className="message-data align-right">
					<span className="message-data-time">{this.props.when}</span> &nbsp; &nbsp;
					<span className="message-data-name">{this.props.name}</span> <i className="fa fa-circle me"/>
				</div>
				<div className="message other-message float-right">
					{this.props.text}
				</div>
			</li>
		);
	}
}

export default Message;
