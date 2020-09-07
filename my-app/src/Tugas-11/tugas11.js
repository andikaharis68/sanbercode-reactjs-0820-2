import React, { Component } from "react"

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 100,
            date: new Date(),
            visible: true
        }
    }
    tick() {
        this.setState({
            time: this.state.time - 1,
            date: new Date()
        })
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentDidUpdate() {
        if (this.state.visible === true) {
            if (this.state.time <= 0) {
                this.setState({
                    visible: false
                })
            }
        }
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    render() {
        return (
            <div>
                {this.state.visible && (
                    <div style={{ margin: "auto", width: "700px" }}>
                        <h1 style={{ float: "left" }}>Sekarang Jam: {this.state.date.toLocaleTimeString()}</h1>
                        <h1 style={{ float: "right" }}>Hitung Mundur: {this.state.time} </h1>
                    </div>
                )}
            </div>
        )
    }
}

export default Timer;