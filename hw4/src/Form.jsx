import React from 'react';

export class Form extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.onChange(event);
    }

    render() {
        const person = this.props.person;
        const contact = this.props.contact;

        return (
            <form>
                <label>
                    Ваше имя:
                    <input
                        name="person"
                        value={person}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Контакт для связи:
                    <input
                        name="contact"
                        value={contact}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
            </form>
        );
    }
}
