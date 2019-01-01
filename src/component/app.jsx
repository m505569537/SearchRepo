import React, {Component}  from 'react'

import List from './list'
import Search from './search'

export default class App extends Component {
	state = {
		keyword: ''
	}

	addWord = (kword) => {
		this.setState({
			keyword: kword
		})
	}

	render () {
		const {keyword} = this.state;
		return (
			<div>
				<p>请输入你想搜索的项目库的关键字</p>
				<Search addWord={this.addWord} />
				<List keyword={keyword} />
			</div>
		)
	}
}