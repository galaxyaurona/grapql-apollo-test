import React, { Component } from "react"
import LikeLyric from "../queries/likeLyric"
import { graphql } from "react-apollo"
class LyricList extends Component {
    handleLikeClick(id) {

        this.props.mutate({
            variables: {
                id: id
            }
        })
    }
    renderLyricList() {

        return this.props.lyrics.map(({ id, content, likes }) => {
            return (
                <li className="collection-item" key={id}>
                    {content}
                    <i className="material-icons right clickable" onClick={() => this.handleLikeClick(id)}>thumb_up</i>
                    <span className="right">{likes}</span>
                </li>

            )
        })
    }
    render() {
        return (
            <div className="">
                <h5>Lyrics </h5>
                <ul className="collection">

                    {this.renderLyricList()}
                </ul>
            </div>

        )
    }
}

export default graphql(LikeLyric)(LyricList)