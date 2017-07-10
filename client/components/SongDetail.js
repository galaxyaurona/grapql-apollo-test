import React, {Component} from "react" 
import fetchSong from "../queries/fetchSong"
import {graphql} from "react-apollo"
import {Link} from "react-router"
import LyricCreate from "./LyricCreate"
import LyricList from "./LyricList"
import addLyricToSong from "../queries/addLyricToSong"
class SongDetail extends Component {  
    componentWillMount() {
 
    }
    handleLyricCreate(content){
        console.log("props",this.props,content)
        const mutation = this.props.mutate({
            query: addLyricToSong,
            variables: {
                content: content,
                songId: this.props.params.id
            }
        })

        return mutation

    }
    render () {
        console.log("song", this.props.data);
        const {song} = this.props.data;
        let content = "";
        if (!song)  
            content = <h3>Loading...</h3>
        else 
            content =  (
                <div>
                    <h3>{this.props.data.song.title}</h3>
                    <LyricList lyrics={this.props.data.song.lyrics}>
                    </LyricList>
                </div>

            )
        return (
            <div>
                <Link to="/" className="btn-flat blue">
                   Back
                </Link>
                {content}
                <LyricCreate onSubmit={content => this.handleLyricCreate(content)}>
                </LyricCreate>
            </div>
        )
    } 
} 
 
export default graphql(fetchSong,{
    options: (props) => {
        return {
            variables: {id: props.params.id}
        }
    }
})(graphql(addLyricToSong)(
    SongDetail)
)