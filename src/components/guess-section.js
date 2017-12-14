import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default class GuessSection extends React.Component {

    constructor(props) {
        super(props);
    }

    // onChangeTest(input) {
    //     console.log(input);
    // }

    // onSubmit(input) {
    //     this.props.updateGuesses(input);
    // }

    render() {
        return (
            <section>
                <h2 id="feedback">{this.props.feedback}</h2>
                <GuessForm 
                onSubmit={(value) => this.props.updateGuesses(value)}
                />
            </section>
        );
    }
}

// export default function GuessSection(props) {
//     return (
//         <section>
//             <h2 id="feedback">{props.feedback}</h2>
//             <GuessForm />
//         </section>
//     );
// }

