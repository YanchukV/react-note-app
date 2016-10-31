import React, { Component } from 'react';

class NoteColor extends Component {


	render() {

		let colors = this.props.colors;
		let onSelectColor = this.props.onSelectColor;

		return (
			<div className='note__color'>
				{colors.map(function(item, index){
					return (
						<span key={index}>
							<input type='radio'
									className='note__radio-color'
									id={`class${index}`}
									name='option1'
									value={item}
									onChange={onSelectColor.bind(this)}/>
							<label htmlFor={`class${index}`}>
								<span style={{backgroundColor: item}} className='before'/>
								<span className='after' style={{backgroundColor: 'black'}}/>
							</label>
						</span>
					);
				})}
			</div>
		);
	}


}

export default NoteColor;
