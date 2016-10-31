import React, { Component } from 'react';
import NoteColor from '../components/NoteColor';

class NoteEditor extends Component {

	constructor(props) {
		super(props);
		this.state = {
			about: '',
			color: 'white'
		};
	}

	handleTextChange(event) {
		this.setState({ about: event.target.value });
	}

	handleNoteAdd() {
		var newNote = {
			about: this.state.about,
			color: this.state.color,
			id: Date.now()
		};

		if(newNote.about.length !== 0) {
			this.props.onNoteAdd(newNote);
			this.setState({ about: ''});
		} else {
			alert('Поле не должно быть пустым!');
		}

	}

	handleNoteColor(event) {
		this.setState({ color: event.target.value  });
	}

	render() {
		return(
			<div className='note__editor'>
				<textarea className='note__area'
						placeholder='Enter your note here...'
						value={this.state.about}
						onChange={this.handleTextChange.bind(this)}/>
				<NoteColor colors={['#ffccbc','#f9fbe7','#bbdefb','#d7ccc8','#b2ebf2']}
							onSelectColor={this.handleNoteColor.bind(this)} />
				<button className='note__btn' onClick={this.handleNoteAdd.bind(this)}>Add</button>
			</div>
		);
	}

}

export default NoteEditor;
