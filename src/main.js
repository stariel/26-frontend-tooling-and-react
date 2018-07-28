'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { say } from 'cowsay';
import faker from 'faker';

import './style/app.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: null,
        };

        this.cowTalk = this.cowTalk.bind(this);
    }

    cowTalk() {
        let content = faker.fake("{{lorem.sentence}}");
        ReactDOM.render(say({ text: content }), document.getElementById('cow'));
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Generate Cowsay Lorem</h1>
                </header>
                <pre id="cow"></pre>
                <button onClick={this.cowTalk}>click me</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));