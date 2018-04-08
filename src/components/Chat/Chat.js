import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

let messageList = [{
	when: "10:10 AM, Today",
	name: "Olia",
	text: "Hi Vincent, how are you? How is the project coming along?"
}, {
	when: "10:12 AM, Today",
	name: "Vincent",
	text: "Are we meeting today? Project has been already finished and I have results to show you."
}, {
	when: "10:14 AM, Today",
	name: "Olia",
	text: "Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?"
}, {
	when: "10:26 AM, Today",
	name: "Vincent",
	text: "Actually everything was fine. I'm very excited to show this to our team."
} ];

class Chat extends Component {

	state = {
		messages: [],
		messageInput: '',
	};

	componentDidMount() {
		this.setState({messages: messageList})
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			messages: nextProps.messages,
		})
	}

	changeInputMessage = (event) => {
		let inputVal = event.target.value;
		this.setState( ({messageInput}) => ({ messageInput: inputVal}));
	};

	sendMessageOnEnter =(event)=> {
		if(event.key === 'Enter' && this.state.messageInput.length) {
			let inputVal = event.target.value;
			let message = {
				when: "10:26 AM, Today",
				name: "Olia",
				text: inputVal
			};

			let newMessageList = this.state.messages.slice();
			newMessageList.push(message);
			this.setState({messages: newMessageList});

			console.log(this.state.messages);

			this._text.value= '';
		}
	};


	render() {
		return (

			<div className="container clearfix">
				<div className="chat">
					<div className="chat-header clearfix">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
						     alt="avatar"/>
						<div className="chat-about">
							<div className="chat-with">Chat with Vincent Porter</div>
							<div className="chat-num-messages">already 1 902 messages</div>
						</div>
						<i className="fa fa-star"/>
					</div>
					<div className="chat-history">
						<ul>
							{
								messageList.map((message,index) => {
									return <Message key={index} time={message.when} name={message.name} text={message.text} state={this.state.showMessages} />
								})
							}
						</ul>
					</div>
					<div className="chat-message clearfix">
						<input className="input-message"
						       type="text"
						       placeholder="Введите сообщение"
						       ref={input => this._text = input}
						       value={this.state.messageInput}
						       onChange={this.changeInputMessage}
						       onKeyPress={this.sendMessageOnEnter}>
						</input>
					</div>
				</div>
			</div>

		);
	}
}

export default Chat;