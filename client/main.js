import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ImageList from './components/image_list'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: []
        }
    }

    componentWillMount() {
        axios
            .get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({images: response.data.data}))
    }

    render() {
        return (
            <div>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById("app"));
})

