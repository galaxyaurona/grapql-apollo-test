import React, { Component } from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"
import { Link } from "react-router"
import fetchSongs from "../queries/fetchSongs"
import deleteSong from "../queries/deleteSong"
class SongList extends Component {
    handleDeleteSong(id) {
        console.log(this.props);
        this.props.mutate({
            variables: {
                id: id
            },
        }).then(() => this.props.data.refetch())
    }

    renderSongList(songs) {
        return songs.map(({ id, title }) => {
            return (
                <li className="collection-item" key={id}>
                    <Link to={`/songs/${id}`}>{title}</Link>

                    <i className="material-icons right clickable " onClick={() => this.handleDeleteSong(id)}>delete</i>


                </li>
            )
        })
    }
    render() {

        return (
            <div>
                <h3>Song List</h3>
                <ul className="collection">
                    {!this.props.data.loading ? this.renderSongList(this.props.data.songs) : "Loading from server"}
                </ul>
                <Link to="/songs/new"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}



export default graphql(fetchSongs)
    (graphql(deleteSong)(SongList)
    );