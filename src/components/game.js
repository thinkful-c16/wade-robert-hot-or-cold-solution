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
            targetNumber: Math.round(1 + Math.random() * (100 - 1)),
            feedback: 'Make your guess!'
        }
    }

    newGame() {
        const min = 1;
        const max = 100;
        this.setState({
            guesses: [],
            targetNumber: Math.round(1 + Math.random() * (100 - 1)),
            feedback: 'Make your guess!'
        })
    }

    updateGuesses(value) {
        console.log(this.state.targetNumber);
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
                <Header newGame={this.newGame.bind(this)} />
                <GuessSection updateGuesses={this.updateGuesses.bind(this)} feedback={this.state.feedback} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

