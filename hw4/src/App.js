import './App.css';
import {Form} from './Form';
import {Display} from './Display';
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person: '',
            contact: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value});
    }

    render() {
        const person = this.state.person;
        const contact = this.state.contact;

        return (
            <div>
                <Form
                    person={person}
                    contact={contact}
                    onChange={this.handleChange}/>
                <Display
                    person={person}
                    contact={contact}
                    onChange={this.handleChange}/>
            </div>

        );
    }
}

export default App;
