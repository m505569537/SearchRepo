import React, {Component}  from 'react'
//import PropTypes  from 'prop-types'
import PubSub  from 'pubsub-js'

export default class Search extends Component {
	
	/*
	static propTypes = {
		addWord: PropTypes.func.isRequired
	}
	*/

	add = () => {
		const kword = this.input.value;
		if(!kword){
			return;
		}
		PubSub.publish("search", kword);
	}
	
	//绑定键盘事件
	componentDidMount() {
		document.addEventListener("keydown",this.onKeyDown);
	}
	
	componentWillUnmount() {
		document.removeEventListener("keydown", this.onKeyDown);
	}

	onKeyDown = (e) => {
		if(e.keyCode === 13){
			this.add();
		}
	}

	render () {
		return (
			<div>
				<input type="text" ref={input => {this.input=input}} />
				<button onClick={this.add}>submit</button>
			</div>
		)
	}
}