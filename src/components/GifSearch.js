import React, { Component } from 'react'

export default class GifSearch extends Component {
//Create an empty string to hold the input value
    state = {
        query: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                    </form>
            </div>
        )
    }
}
