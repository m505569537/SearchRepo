import React, {Component}  from 'react'

import List from './list'
import Search from './search'

//旧的传参方式是通过父组件作为过渡来将一个组件的数据传递给另一个兄弟组件
//而利用pubsubjs库可以实现各个组件直接通信，而不需要一层层递归传值

export default class App extends Component {
	//不需要父组件传参
	/*
	state = {
		keyword: ''
	}

	addWord = (kword) => {
		this.setState({
			keyword: kword
		})
	}
	*/

	render () {
		return (
			<div>
				<p>请输入你想搜索的项目库的关键字</p>
				<Search />
				<List />
			</div>
		)
	}
}