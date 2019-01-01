import React, {Component}  from 'react'
import axios  from 'axios'
import PropTypes  from 'prop-types'

import Item from './item'

/*此组件用来显示返回的数据，数据显示呈3中状态：
	1.用户尚未输入请求目标
	2.数据请求过程中
	3.得到想要的数据后
*/

export default class List extends Component {

	state = {
		dataArray:[],  //用于存储返回的数据对象
		beforeRequire:true,  //发送请求前
		loading:false,   //请求过程中
	}

	static propTypes = {
		keyword: PropTypes.string.isRequired
	}

	//当组件收到新的数据(props)的时候，就会调用这个函数
	componentWillReceiveProps(nextProps) {
		this.setState({
			beforeRequire:false,
			loading:true
		})
		const {keyword} = nextProps;
		const Url = 'https://api.github.com/search/repositories?q='+ keyword +'&sort=stars';
			//console.log(Url)
			//使用axios发送ajax请求
			axios.get(Url)
				 .then(response => {
				 	const fresult = response.data.items;
				 	//console.log(result)
				 	const result = fresult.map((item, index) => ({name:item.name, html_url:item.html_url}));
					//console.log(result)
				 	this.setState({
				 		dataArray:result,
						loading:false
				 	})
				 	//console.log(this.state.dataArray);
				 }).catch(error => {
				 	console.log(error);
				 })

			//使用fetch发送ajax请求
			/*
			fetch(Url)
				.then(response => {
					return response.json();
				})
				.then(data => {
					this.setState({
						dataArray: data.items
					})
				}).catch(error => {
					console.log(error);
				})
			*/
	}

	render () {
		const {dataArray,beforeRequire,loading} = this.state;

		if(beforeRequire){
			return <h1>请用户输入想要搜索的库</h1>
		} else if(loading) {
			return <h1>LOADING.....</h1>
		} else {
			return (
				<div>
					<p>关键字为{this.props.keyword}的项目排名为：</p>
					<ul>   
						{dataArray.map((data, index) => <Item key={index} data={data} index={index} />)}
					</ul>
				</div>
			)
		}
	}
}

//{dataArray.map((data, index) => {<Item key={index} name={data.name} html_url={data.html_url} index={index} />})}