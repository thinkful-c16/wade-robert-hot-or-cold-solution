import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            guesses: [2, 3, 4, 9, 45, 44],
            targetNumber: 14
        }

    }

    updateGuesses() {

    }

    render() {
        return (
            <div>
                <Header />
                <GuessSection updateGuesses={this.updateGuesses.bind(this)} feedback="Make your guess!" />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

// export default function Game(props) {
//     return (
//         <div>
//             <Header />
//             <GuessSection feedback="Make your guess!" />
//             <GuessCount count={3} />
//             <GuessList guesses={[10, 15, 25]} />
//         </div>
//     );
// }

