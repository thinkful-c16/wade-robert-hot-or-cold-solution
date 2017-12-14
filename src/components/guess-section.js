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

    onSubmit(input) {
        console.log(input);
    }

    render() {
        return (
            <section>
                <h2 id="feedback">{this.props.feedback}</h2>
                <GuessForm 
                onSubmit={event => this.onSubmit(event)}
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

