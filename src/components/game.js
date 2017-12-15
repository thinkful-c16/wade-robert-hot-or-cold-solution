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
        let guessDistance=Math.abs(value - this.state.targetNumber);
        let feedbackText='';
        if(guessDistance>=96){
            feedbackText='Oxygen freezes';
        } else if(guessDistance>=91 && guessDistance<=95){
            feedbackText='Oxygen liquifies';
        } else if(guessDistance>=86 && guessDistance<=90){
            feedbackText='Carbon dioxide freezes';
        } else if(guessDistance>=81 && guessDistance<=85){
            feedbackText='Hands and face numb';
        } else if(guessDistance>=76 && guessDistance<=80){
            feedbackText='Water freezes';
        } else if(guessDistance>=71 && guessDistance<=75){
            feedbackText='Winter wind';
        } else if(guessDistance>=66 && guessDistance<=70){
            feedbackText='Autumn breeze';
        } else if(guessDistance>=61 && guessDistance<=65){
            feedbackText='Rather chilly';
        } else if(guessDistance>=56 && guessDistance<=60){
            feedbackText='Slightly cool';
        } else if(guessDistance>=51 && guessDistance<=55){
            feedbackText='Room temperature';
        } else if(guessDistance>=46 && guessDistance<=50){
            feedbackText='Slightly warm';
        } else if(guessDistance>=41 && guessDistance<=45){
            feedbackText='Rather heated';
        } else if(guessDistance>=36 && guessDistance<=40){
            feedbackText='Summer breeze';
        } else if(guessDistance>=31 && guessDistance<=35){
            feedbackText='Desert wind';
        } else if(guessDistance>=26 && guessDistance<=30){
            feedbackText='Water boils';
        } else if(guessDistance>=21 && guessDistance<=25){
            feedbackText='Paper catches fire';
        } else if(guessDistance>=16 && guessDistance<=20){
            feedbackText='Lead melts';
        } else if(guessDistance>=11 && guessDistance<=15){
            feedbackText='Lava boils';
        } else if(guessDistance>=6 && guessDistance<=10){
            feedbackText='Iron boils';
        } else if(guessDistance===5){
            feedbackText='Center of the Earth';
        } else if(guessDistance===4){
            feedbackText='Surface of the Sun';
        } else if(guessDistance===3){
            feedbackText='Center of the Sun';
        } else if(guessDistance===2){
            feedbackText='Nova heat!';
        } else if(guessDistance===1){
            feedbackText='Supernova explosion!';
        }
        
        if (value+'' === this.state.targetNumber+'') {
            this.setState({
                guesses: this.state.guesses.concat(value),
                feedback: 'Congratulations! You won!'
            })
            console.log('You won!')
        }
        else{
            this.setState({
                guesses: this.state.guesses.concat(value),
                feedback: feedbackText
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

