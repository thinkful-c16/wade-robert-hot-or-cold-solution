import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            guesses: [],
            targetNumber: 14,
            feedback: 'Make your guess!'
        }

    }

    updateGuesses(value) {
        console.log(value);
        if (value+'' === this.state.targetNumber+'') {
            this.setState({
                guesses: this.state.guesses.concat(value),
                feedback: 'Congratulations! You won!'
            })
            console.log('You won!')
        }
        else{
            this.setState({
                guesses: this.state.guesses.concat(value)
            })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <GuessSection updateGuesses={this.updateGuesses.bind(this)} feedback={this.state.feedback} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

