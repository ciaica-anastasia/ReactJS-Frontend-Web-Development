import React from 'react';

export class Display extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {isClicked: false};
    }

    handleInputChange(event) {
        this.props.onChange(event);
    }

    handleClick() {
        this.setState({isClicked: true});
    }

    render() {
        const person = this.props.person;
        const contact = this.props.contact;

        return (
            <div>
                <button onClick={this.handleClick}>Показать введённые данные</button>
                {
                    this.state.isClicked &&
                    (<div>
                        <p>Ваше имя: {person}</p>
                        <p>Ваш контакт для связи: {contact}</p>
                    </div>)
                }
            </div>
        )

    }
}
