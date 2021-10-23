import React from 'react';

export class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentCount: props.start,
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState((prevState) => {
                return {
                    currentCount: prevState.currentCount + 1
                }
            })
            if (this.state.currentCount === this.props.end) {
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
                <h4>This is {this.props.name} counter!</h4>
                <h1>{this.state.currentCount}</h1>
            </div>
        );
    }
}
