// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state.settings.bitrate))
    }

    resoClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state.settings.video.resolution))
    }

    render(){
        return (
        <div>
            <button className='bitrate' onClick={this.bitrateClick}>Increase bitrate</button>
            <button className='resolution' onClick={this.resoClick}>Lower resolution</button>
        </div>
        )
    }
}

export default YouTubeDebugger