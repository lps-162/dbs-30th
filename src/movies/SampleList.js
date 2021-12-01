import React, { Component } from "react";
import axios from "axios";

class SampleList extends Component {
    state = {
        movies: [],
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get("http://localhost:8080/movies")
            .then(res => {
                console.log("Fetching movies successful", res.data)
                this.setState({
                    ...this.state,
                    movies: res.data
                })
            })
            .catch(err => {
                console.log("Could not fetch movies", err)
            })
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {

    }

    getLiTags = () => {
        const liTags = this.state.movies.map(m => <li key={m.id}>{m.name}</li>)
        return liTags
    }

    getRowTags = () => {
        const rowTags = this.state.movies.map(m => {
            return <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.director}</td>
                <td>{m.artist}</td>
            </tr>
        })
        return rowTags;
    }


    render() {
        return (
            <div>
                <h3>List of all movies - using class component</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Movie ID</th>
                            <th>Name</th>
                            <th>Director</th>
                            <th>Artists</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getRowTags()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SampleList;