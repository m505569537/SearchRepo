import React, {Component}  from 'react'
import axios  from 'axios'
import PropTypes  from 'prop-types'

import Item from './item'

export default class List extends Component {

	state = {
		dataArray:[],
	}

	static propTypes = {
		keyword: PropTypes.string.isRequired
	}

	componentDidMount() {
		const {keyword} = this.props;
		const Url = 'https://api.github.com/search/repositories?q='+ keyword +'&sort=stars';
			//console.log(Url)
			axios.get(Url)
				 .then(response => {
				 	const result = response.data.items;
				 	//console.log(result)
				 	this.setState({
				 		dataArray:result
				 	})
				 	//console.log(this.state.dataArray);
				 }).catch(error => {
				 	console.log(error);
				 })
	}

	render () {
		const {dataArray} = this.state;
		if(!dataArray.length) {
			return (
				<div>LOADING.....</div>
			)
		} else {
			return (
				<div>
					<p>关键字为{this.props.keyword}的项目排名为：</p>
					<ul>   
						{dataArray.map(function(data, index) {return <Item key={index} data={data} index={index} />})}
					</ul>
				</div>
			)
		}
	}
}

//{dataArray.map((data, index) => {<Item key={index} name={data.name} html_url={data.html_url} index={index} />})}