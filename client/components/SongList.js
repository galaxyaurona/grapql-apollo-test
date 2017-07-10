import React, { Component } from "react"
import gql from "graphql-tag"
import { graphql } from "react-apollo"
import { Link } from "react-router"
import fetchSongs from "../queries/fetchSongs"
import deleteSong from "../queries/deleteSong"
class SongList extends Component {
handleDeleteSong(id){
    console.log(this.props);
    this.props.mutate({
        variables:{
            id: id
        },
    }).then(()=>this.props.data.refetch())
}

    renderSongList(songs) {
        return songs.map(({ id, title }) => {
            return (
                <li className="collection-item" key={id}>
                    {title}

                    <i className="material-icons right " onClick={() => this.handleDeleteSong(id)}>delete</i>


                </li>
            )
        })
    }
    render() {
        console.log("graph", fetchSongs)
        return <div>Song List
            <ul className="collection">
                {!this.props.data.loading ? this.renderSongList(this.props.data.songs) : "Loading from server"}
            </ul>
            <Link to="/songs/new"
                className="btn-floating btn-large red right"
            >
                <i className="material-icons">add</i>
            </Link>
        </div>
    }
}



export default graphql(fetchSongs)
    (graphql(deleteSong)(SongList)
    );