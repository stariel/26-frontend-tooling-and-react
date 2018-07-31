'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {CAT, FISH, FROG, GHOST, RABBIT, say} from 'cowsay';
import faker from 'faker';

import './style/app.scss';

let animals = ['', CAT, FISH, FROG, GHOST, RABBIT];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: null,
            animal: '',
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
        if (event.target.value === '1') {
            this.setState({animal: CAT});
        }

        if (event.target.value === '2') {
            this.setState({animal: FISH});
        }
      }

    cowTalk() {
        let content = faker.fake("{{lorem.sentence}}");
        ReactDOM.render(say({
             text: content,
             cow: this.state.animal, 
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
                <select onChange={this.handleChange}>
                <option value="0">cow</option>
                <option value="1">cat</option>
                <option value="2">fish</option>
                <option value="3">frog</option>
                <option value="4">ghost</option>
                <option value="5">rabbit</option>
                </select>
                </label>
                </form>
                <button type="submit" form="animal" onClick={this.handleSubmit}>click me</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));