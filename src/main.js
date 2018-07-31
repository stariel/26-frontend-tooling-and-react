'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { say, CAT, FISH, FROG, GHOST, RABBIT } from 'cowsay';
import faker from 'faker';

import './style/app.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: null,
            cow: '',
        };

        this.cowTalk = this.cowTalk.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.cowTalk();
    }

    handleChange(event) {
        this.setState({cow: event.target.value});
      }

    cowTalk() {
        let content = faker.fake("{{lorem.sentence}}");
        ReactDOM.render(say({
             text: content,
             cow: this.state.cow.toUpperCase(), 
            }), document.getElementById('cow'));
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Generate Cowsay Lorem</h1>
                </header>
                <pre id="cow"></pre>
                <form id="animal">
                <label> Choose your animal:
                <select value={this.state.cow} onChange={this.handleChange}>
                <option value="">cow</option>
                <option value="cat">cat</option>
                <option value="fish">fish</option>
                <option value="frog">frog</option>
                <option value="ghost">ghost</option>
                <option value="rabbit">rabbit</option>
                </select>
                </label>
                </form>
                <button type="submit" form="animal" onClick={this.handleSubmit}>click me</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));