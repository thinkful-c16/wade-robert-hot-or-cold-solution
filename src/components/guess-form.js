import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {

    render() {
        return (
            <form>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" min="1" max="100" autoComplete="off"
                    placeholder="Enter your Guess" ref={(input) => this.input = input} required />
                <span className="guessParameters">Enter a number 1-100</span>
                <input onSubmit={event => this.props.onSubmit(this.input.value)} type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

// export default function GuessForm(props) {
//     return (
//         <form>
//             <input type="text" name="userGuess" id="userGuess"
//                 className="text" maxLength="3" min="1" max="100" autoComplete="off"
//                 placeholder="Enter your Guess" ref={(input) => this.input = input} required />
//             <span className="guessParameters">Enter a number 1-100</span>
//             <input onSubmit={event => props.onSubmit(this.input.value)} type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
//         </form>
//     );
// };


