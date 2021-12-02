import React, { Component } from "react";

class CounterComp extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        console.log("Mounted")
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
        console.log("Updated")
        document.title = `You clicked ${this.state.count} times`;
    }

    componentWillUnmount() {
        console.log("Unmounting")
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("Render method")
        return (
            <div>
                <h3>Counter Component using classes</h3>
                <p>The counter value is {this.state.count}</p>
                <p>The counter value is {this.state.count}</p>
                <p>The counter value is {this.state.count}</p>
                <br />
                <button onClick={this.incrementCounter}>
                    Increment Counter
                </button>
            </div>
        )
    }
}

export default CounterComp;