import React from 'react';

export class Clock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstCounter: 10,
            secondCounter: 20
        };
    }

    componentDidMount() {
        this.tickCount = 0;
        this.timerId = setInterval(() => {
            this.tickCount += 1;
            this.setState( (prevState) => {
                return {
                    firstCounter: prevState.firstCounter + 1,
                    secondCounter: prevState.secondCounter + 1
                }
            })
            if (this.tickCount === 10) {
                clearInterval(this.timerId);
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div class="counter">
            <div class="first-counter">
                <h4>This is first counter!</h4>
                <h1>{this.state.firstCounter}</h1>
            </div>
            <div class="second-counter">
                <h4>This is second counter!</h4>
                <h1>{this.state.secondCounter}</h1>
            </div>
            </div>
        );
    }
}