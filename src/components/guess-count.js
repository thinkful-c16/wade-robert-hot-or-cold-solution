import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
    return (
        <p>
            <span id="count">Guess # {props.count}!</span>
        </p>
    );
}
