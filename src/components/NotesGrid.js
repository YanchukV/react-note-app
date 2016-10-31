import React, { Component } from 'react';
import Masonry from 'masonry-layout';
import Note from './Note';

class NotesGrid extends Component {

	componentDidMount() {
		let elem = this.refs.grid;
		this.msnry = new Masonry( elem, {
			itemSelector: '.note__item',
			columnWidth: 210,
			gutter: 20,
			isFitWidth: true
		});

	}

	componentDidUpdate(prevProps) {
		if (this.props.notes.length !== prevProps.notes.length) {
			this.msnry.reloadItems();
			this.msnry.layout();
		}

	}

	render() {

		let onNoteDelete = this.props.onNoteDelete;

		return(
			<div className='notes__grid' ref='grid' >
				{
					this.props.notes.map(function(note){
						return <Note key={note.id}
									onDelete={onNoteDelete.bind(null, note)}
									color={note.color}>
									{note.about}
								</Note>;
					})
				}
			</div>
		);
	}

}

export default NotesGrid;