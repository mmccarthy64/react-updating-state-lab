// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render(){
        // console.log(this.state.timesClicked)
        return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    }
}

export default DigitalClicker