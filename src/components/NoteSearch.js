import React, { Component } from 'react';

class NoteSearch extends Component {


	render() {

		let onSearch = this.props.onSearch;

		return (
			<input type='text'
					className='note__search' placeholder='Search..' onChange={onSearch.bind(this)}/>
		);
	}


}

export default NoteSearch;

