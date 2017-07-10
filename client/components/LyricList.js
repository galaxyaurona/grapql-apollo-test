import React, { Component } from "react"

class LyricList extends Component {
    renderLyricList() {
        console.log(this.props.lyrics)
        return this.props.lyrics.map(({ id, content }) => {
            return (
                <li className="collection-item" key={id}>
                    {content}
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

export default LyricList