import React from 'react';

export class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            start: props.start,
            end: props.end
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState( (prevState) => {
                return {
                    start: prevState.start + 1
                }
            })
            if (this.state.start === this.state.end) {
                clearInterval(this.timerId);
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="counter">
                <h4>This is {this.state.name} counter!</h4>
                <h1>{this.state.start}</h1>
            </div>
        );
    }
}