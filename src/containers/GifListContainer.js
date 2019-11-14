import React, { Component } from 'react'
//GifListContainer is the parent of the two below
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
//create a state to hold the gif
    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                < GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

//create a fetch request to get the gif


    fetchGIFs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=MtQboQyqpLhIRpyMgB8AFJTg0XsrsPt9&rating=g&limit=3`)
            .then(res => res.json())
            .then(({ data }) => {
                this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url })) })
            })
    }


//Mount the component to render the fetch to the DOM

componentDidMount() {
    this.fetchGIFs()
}

}
