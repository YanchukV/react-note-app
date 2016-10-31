import React, { Component } from 'react';

class Note extends Component {



	render() {

		let style = { backgroundColor: this.props.color };

		return(
			<div className='note__item' style={style}>
				<span className='note__item-delete' onClick={this.props.onDelete}>x</span>
				{this.props.children}
			</div>
		);
	}

}

export default Note;
