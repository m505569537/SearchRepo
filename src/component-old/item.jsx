import React, {Component}  from 'react'
import PropTypes  from 'prop-types'

export default class Item extends Component {

	static propTypes = {
		data : PropTypes.object.isRequired,
		index : PropTypes.number.isRequired,
	}

	render () {
		const {data,index} = this.props;
		return (
			<li>第{index+1}名：<a href={data.html_url} target={"_blank"}>{data.name}</a></li>
		)
	}
}