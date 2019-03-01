import React, { Component } from 'react'
import JokesComponent from './JokesComponent';
import RequiresAuth from '../Auth/RequiresAuth';
import ReactLoading from 'react-loading';
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
    
            if(this.state.jokes.length > 0) {
                return (<JokesComponent jokes={this.state.jokes}/>)
            } else {
                return(<ReactLoading id='loader' color='#4ef442' height={200} width={200} />)

            }
    
    }
}

export default RequiresAuth(JokesView);