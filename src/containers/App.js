import React, { Component } from 'react';
import NoteSearch from '../components/NoteSearch';
import NotesGrid from '../components/NotesGrid';
import NoteEditor from '../components/NoteEditor';


export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			notes: []
		};
	}


	componentDidMount() {

		let localNotes = JSON.parse(localStorage.getItem('notes'));
		localNotes ? this.setState({notes: localNotes}) : false;

	}

	handleNoteAdd(newNote) {

		let newNotes = this.state.notes.slice();
		newNotes.unshift(newNote);
		this._updateState(newNotes);

	}

	handleNoteDelete(note) {

		let noteId = note.id;
		let newNotes = this.state.notes.filter(function (note) {
			return note.id != noteId;
		});
		this._updateState(newNotes);
	}

	handleNoteSearch(event) {

		let searchQuery = event.target.value.toLowerCase();
		let notes = JSON.parse(localStorage.getItem('notes'));
		let searchNotes = notes.filter(function (note) {
			let searchValue = note.about.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;

		});

		this.setState({
			notes: searchNotes
		});

	}


	_updateState(newValue) {
		this.setState({notes: newValue}, this._updateLocalStorage);
	}

	_updateLocalStorage() {

		let notes = JSON.stringify(this.state.notes);
		localStorage.setItem('notes', notes);

	}

	render() {

		let notes = this.state.notes;

		return (
			<div className='content-wrap'>
				<NoteSearch onSearch={this.handleNoteSearch.bind(this)}/>
				<NoteEditor onNoteAdd={this.handleNoteAdd.bind(this)}/>

				<NotesGrid notes={notes} onNoteDelete={this.handleNoteDelete.bind(this)}/>
			</div>
		);


	}
}
