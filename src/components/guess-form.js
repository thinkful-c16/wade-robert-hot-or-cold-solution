import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    onInputChange(input) {

        if(input > 0 && input < 101)
        this.setState({
            inputValue: input
        })
        else{
            console.log('wrong input');
        }
    }

	onSubmit(event, input) {
		if(input!==''){
			event.preventDefault();
			this.props.onSubmit(input);
			this.setState({
				inputValue: ''
			});
		}
	}

    render() {
        return (
            <form >
                <input type="number" name="userGuess" id="userGuess"
                    className="number" maxLength="3" min="1" max="100" autoComplete="off"
                    placeholder="Enter your Guess" value={this.state.inputValue}
                    onChange={event => this.onInputChange(event.target.value)} required />
                <span className="guessParameters">Enter a number 1-100</span>
                <input onClick={event => this.onSubmit(event, this.state.inputValue)} 
                type="submit" id="guessButton" className="button" name="submit" value="Guess" />
            </form>
        );
    }
};
