import React, { Component } from "react"
import LikeLyric from "../queries/likeLyric"
import { graphql } from "react-apollo"
class LyricList extends Component {
    handleLikeClick(id,likes) {

        this.props.mutate({
            variables: {
                id: id
            }, optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: { id: id, likes: likes+1, __typename: "LyricType" }


            }
        })
    }
    renderLyricList() {

        return this.props.lyrics.map(({ id, content, likes }) => {
            return (
                <li className="collection-item" key={id}>
                    {content && content != "" ? content : "   " }
                    <i className="material-icons right clickable" onClick={() => this.handleLikeClick(id,likes)}>thumb_up</i>
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