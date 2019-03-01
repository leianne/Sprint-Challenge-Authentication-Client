import React, { Component } from 'react'
import JokesComponent from './JokesComponent';
import RequiresAuth from '../Auth/RequiresAuth';
import axios from 'axios';
import './JokesStyles.css'

class JokesView extends Component {
    state = {
        jokes: []
    }

    componentDidMount() {
        axios.get('http://localhost:3300/api/jokes')
            .then(res => {
                this.setState({ jokes: res.data})
            })
            .catch(err => console.log(err))
    }

    render(){
        console.log(this.state)
        return(
            <JokesComponent jokes={this.state.jokes}/>
        )
    }
}

export default RequiresAuth(JokesView);