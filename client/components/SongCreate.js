import React, {Component} from "react" 
import gql from 'graphql-tag'
import {graphql} from "react-apollo"
import {Link} from "react-router"
import fetchSongs from "../queries/fetchSongs"
class SongList extends Component {  
    constructor(props){
        super(props)
        this.state = {
            title:""
        }
    }
    
    handleFormSubmit(event){
     
        event.preventDefault()
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{
                query: fetchSongs 
            }]
            
        }).then( () => {
            this.setState({title:""})
            this.props.router.push("/")
        }).catch( (err) =>{
            console.log("Errors",err)
        }) 

   

    }

    render () {
       
        return (
            <div>
                <Link to="/">Back</Link>
                <h3> Create a new Song</h3>
                <form action="" onSubmit={this.handleFormSubmit.bind(this)}>
                    <label htmlFor="title">Song title:</label>
                    <input type="text"
                    onChange={event => this.setState({title:event.target.value})}
                    value={this.state.title}
                    />
                </form>
            </div>
        )
    } 
} 

const mutation = gql`
    mutation AddSong($title: String) {
	    addSong(title:$title){
            id,
            title
        }  
    }
`
 
export default graphql(mutation)(SongList)