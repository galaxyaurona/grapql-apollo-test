import React, {Component} from "react" 
 
class LyricCreate extends Component { 
    constructor(props){
        super(props)
        this.state= {
            content:""
        }
    } 
    handleFormSubmit(event){
        event.preventDefault()
        this.props.onSubmit(this.state.content).then(()=>{
            this.setState({content:""})
        })
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                   <label htmlFor="addLyric">Add some lyric</label>
                   <input 
                        type="text" 
                        onChange={(event) => this.setState({content: event.target.value})}
                        value ={this.state.content}
                    />
                    <button type="submit" className="btn btn-flat red right">Submit</button> 
                </form>
            </div>
        )
    } 
} 
 
export default LyricCreate